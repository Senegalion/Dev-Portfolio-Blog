package com.portfolio.backend.domain.register.dto;

import com.portfolio.backend.domain.register.entity.RoleName;

import java.util.Set;

public record UserDto(
        Long userId,
        String username,
        String password,
        Set<RoleName> roles
) {
}
