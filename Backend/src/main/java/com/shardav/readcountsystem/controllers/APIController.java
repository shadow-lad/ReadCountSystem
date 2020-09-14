package com.shardav.readcountsystem.controllers;

import com.shardav.readcountsystem.dao.UserDAO;
import com.shardav.readcountsystem.entities.Story;
import com.shardav.readcountsystem.entities.User;
import com.shardav.readcountsystem.payload.response.MessageResponse;
import com.shardav.readcountsystem.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.shardav.readcountsystem.dao.StoryDAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    StoryDAO storyDAO;

    @Autowired
    UserDAO userDAO;

    @GetMapping(path = "/stories")
    ResponseEntity<?> getStories() {
        List<Story> stories = storyDAO.findAll();
        return ResponseEntity.ok(stories);
    }

    @GetMapping(path = "/stories/{id}")
    ResponseEntity<?> getStoryById(@PathVariable long id, @RequestHeader("Authorization") String token) {

        String jwtToken = token.substring(7);
        String username = jwtUtils.getUsernameFromToken(jwtToken);

        Optional<Story> optionalStory = storyDAO.findById(id);
        if (optionalStory.isPresent()) {
            Story story = optionalStory.get();
            story.addView(username);
            storyDAO.save(story);
            return ResponseEntity.ok(storyDAO.findById(id));
        }

        return ResponseEntity.notFound().build();
    }

}