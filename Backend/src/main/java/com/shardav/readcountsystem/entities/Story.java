package com.shardav.readcountsystem.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "stories", uniqueConstraints = @UniqueConstraint(columnNames = "title"))
public class Story {

    @Id
    @GenericGenerator(name = "nanoID", strategy = "com.shardav.readcountsystem.generator.StoryIDGenerator")
    @GeneratedValue(generator = "nanoID")
    private String id;

    @NotBlank
    private String title;
    @NotBlank
    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;

    @JsonIgnore
    @ElementCollection
    private List<String> viewed = new ArrayList<>();

    private int views = 0;

    public Story() {
    }

    public Story(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getViewed() {
        return viewed;
    }

    public void setViewed(List<String> viewed) {
        this.viewed = viewed;
    }

    public void addView(String user) {
        if (!viewed.contains(user)) {
            viewed.add(user);
            views = viewed.size();
        }
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }
}
