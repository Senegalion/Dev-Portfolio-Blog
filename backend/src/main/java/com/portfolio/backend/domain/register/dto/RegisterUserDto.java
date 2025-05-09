package com.portfolio.backend.domain.register.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record RegisterUserDto(
        @NotNull(message = "{username.not.null}")
        @NotEmpty(message = "{username.not.empty}")
        String username,
        @NotNull(message = "{email.not.null}")
        @NotEmpty(message = "{email.not.empty}")
        @Email
        String email,
        @NotNull(message = "{role.not.null}")
        @NotEmpty(message = "{role.not.empty}")
        String role,
        @NotNull(message = "{password.not.null}")
        @NotEmpty(message = "{password.not.empty}")
        String password
) {
}
