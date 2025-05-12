package com.portfolio.backend.domain.blog;

import com.portfolio.backend.domain.blog.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogFacade {
    private final PostRepository postRepository;
    private final PostMapper postMapper;

    @Autowired
    public BlogFacade(PostRepository postRepository, PostMapper postMapper) {
        this.postRepository = postRepository;
        this.postMapper = postMapper;
    }

    public List<PostDto> getAllPosts() {
        List<PostEntity> posts = postRepository.findAll();
        return postMapper.toDtoList(posts);
    }
}
