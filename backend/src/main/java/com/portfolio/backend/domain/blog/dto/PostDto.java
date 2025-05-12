package com.portfolio.backend.domain.blog.dto;

import java.time.LocalDate;

public record PostDto(
        String slug,
        String title,
        String excerpt,
        LocalDate publishedAt
) {
}
