package com.portfolio.backend.domain.blog.dto;

import java.time.Instant;

public record CommentDto(
        AuthorDto author,
        String content,
        Instant createdAt
) {
}
