package com.shardav.readcountsystem.dao;

import com.shardav.readcountsystem.entities.Role;
import com.shardav.readcountsystem.entities.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleDAO extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleEnum name);

}
