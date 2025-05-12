package com.portfolio.backend.domain.blog;

import com.portfolio.backend.domain.blog.dto.PostDetailsDto;
import com.portfolio.backend.domain.blog.dto.PostDto;
import com.portfolio.backend.shared.exception.PostNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public PostDetailsDto getPostBySlug(String slug) {
        PostEntity post = postRepository.findBySlug(slug)
                .orElseThrow(() -> new PostNotFoundException("Post not found: " + slug));
        return postMapper.toDetailsDto(post);
    }
}
