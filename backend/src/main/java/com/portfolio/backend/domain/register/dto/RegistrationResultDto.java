package com.portfolio.backend.domain.register.dto;

import lombok.Builder;

@Builder
public record RegistrationResultDto(
        Long userId,
        String username,
        String email
) {
}
