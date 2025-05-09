package com.portfolio.backend.infrastructure.security.jwt.dto;

import lombok.Builder;

@Builder
public record LoginResponseDto(
        String username,
        String token
) {
}
