package com.portfolio.backend.application.blog;

import com.portfolio.backend.domain.blog.BlogFacade;
import com.portfolio.backend.domain.blog.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class BlogRESTController {
    private final BlogFacade blogFacade;

    @Autowired
    public BlogRESTController(BlogFacade blogFacade) {
        this.blogFacade = blogFacade;
    }

    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPosts() {
        return ResponseEntity.ok(blogFacade.getAllPosts());
    }
}
