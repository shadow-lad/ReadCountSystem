package com.shardav.readcountsystem.dao;

import com.shardav.readcountsystem.entities.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryDAO extends JpaRepository<Story, Long> {

}
