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

		Story story1 = new Story("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
				"when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
				"It has survived not only five centuries, but also the leap into electronic typesetting, " +
				"remaining essentially unchanged. " +
				"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
				"and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

		Story story2 = new Story("Why do we use Lorem Ipsum?",
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. " +
						"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, " +
						"as opposed to using 'Content here, content here', making it look like readable English. " +
						"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, " +
						"and a search for 'lorem ipsum' will uncover many web sites still in their infancy. " +
						"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");

		try {

			storyDAO.saveAll(List.of(story1, story2));

			roleDAO.save(new Role(RoleEnum.ROLE_USER));
			roleDAO.save(new Role(RoleEnum.ROLE_ADMIN));

		} catch (Exception ignore) {
		}
	}
}
