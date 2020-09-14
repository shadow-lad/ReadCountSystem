package com.shardav.readcountsystem;

import com.shardav.readcountsystem.dao.RoleDAO;
import com.shardav.readcountsystem.dao.StoryDAO;
import com.shardav.readcountsystem.entities.Role;
import com.shardav.readcountsystem.entities.RoleEnum;
import com.shardav.readcountsystem.entities.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class ReadCountSystemApplication implements ApplicationRunner {

	@Autowired
    RoleDAO roleDAO;

	@Autowired
	StoryDAO storyDAO;

	public static void main(String[] args) {
		SpringApplication.run(ReadCountSystemApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) {

		Story story1 = new Story("What is Lorem Ipsum?",
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
						"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
						"when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

		Story story2 = new Story("Why do we use Lorem Ipsum?",
				"The point of using Lorem Ipsum is that it has a more-or-less normal " +
						"distribution of letters, as opposed to using 'Content here, content here', " +
						"making it look like readable English.");

		try {

			storyDAO.saveAll(List.of(story1, story2));

			roleDAO.save(new Role(RoleEnum.ROLE_USER));
			roleDAO.save(new Role(RoleEnum.ROLE_ADMIN));

		} catch (Exception ignore) {
		}
	}
}
