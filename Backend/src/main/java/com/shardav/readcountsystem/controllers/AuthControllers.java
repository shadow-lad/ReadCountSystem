package com.shardav.readcountsystem.controllers;

import com.shardav.readcountsystem.dao.RoleDAO;
import com.shardav.readcountsystem.dao.UserDAO;
import com.shardav.readcountsystem.entities.Role;
import com.shardav.readcountsystem.entities.RoleEnum;
import com.shardav.readcountsystem.entities.User;
import com.shardav.readcountsystem.payload.request.LoginRequest;
import com.shardav.readcountsystem.payload.request.SignUpRequest;
import com.shardav.readcountsystem.payload.response.JwtResponse;
import com.shardav.readcountsystem.payload.response.MessageResponse;
import com.shardav.readcountsystem.security.jwt.JwtUtils;
import com.shardav.readcountsystem.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthControllers {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserDAO userDAO;

    @Autowired
    RoleDAO roleDAO;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(
                new JwtResponse(jwt,
                        userDetails.getId(),
                        userDetails.getUsername(),
                        roles));

    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest request) {
        if (userDAO.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken!"));
        }

        User user = new User(request.getUsername(), encoder.encode(request.getPassword()));

        Set<String> requestRole = request.getRole();
        Set<Role> roles = new HashSet<>();

        if (requestRole == null) {
            Role userRole = roleDAO.findByName(RoleEnum.ROLE_USER)
                    .orElseThrow(()->new RuntimeException("Error: Role Not Found."));
            roles.add(userRole);
        } else {
            requestRole.forEach(role -> {
                if ("admin".equals(role)) {
                    Role admin = roleDAO.findByName(RoleEnum.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role Not Found."));
                    roles.add(admin);
                } else {
                    Role userRole = roleDAO.findByName(RoleEnum.ROLE_USER)
                            .orElseThrow(()->new RuntimeException("Error: Role Not Found."));
                    roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userDAO.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

    }

}
