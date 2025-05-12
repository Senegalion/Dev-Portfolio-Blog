package com.portfolio.backend.domain.blog.dto;

import java.time.LocalDate;
import java.util.List;

public record PostDetailsDto(
        String slug,
        String title,
        String excerpt,
        String content,
        LocalDate publishedAt,
        List<CommentDto> comments
) {
}
