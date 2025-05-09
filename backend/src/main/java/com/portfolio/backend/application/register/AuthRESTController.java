package com.portfolio.backend.application.register;

import com.portfolio.backend.domain.register.RegisterFacade;
import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import com.portfolio.backend.domain.register.dto.RegistrationResultDto;
import com.portfolio.backend.infrastructure.security.jwt.JwtAuthenticatorService;
import com.portfolio.backend.infrastructure.security.jwt.dto.LoginResponseDto;
import com.portfolio.backend.infrastructure.security.jwt.dto.TokenRequestDto;
import com.portfolio.backend.shared.exception.UsernameWhileTryingToLogInNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthRESTController {
    private final RegisterFacade registerFacade;
    private final JwtAuthenticatorService jwtAuthenticatorService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthRESTController(RegisterFacade registerFacade, JwtAuthenticatorService jwtAuthenticatorService, PasswordEncoder passwordEncoder) {
        this.registerFacade = registerFacade;
        this.jwtAuthenticatorService = jwtAuthenticatorService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<RegistrationResultDto> registerUser(@Valid @RequestBody RegisterUserDto registerUserDto) {
        String encodedPassword = passwordEncoder.encode(registerUserDto.password());
        RegistrationResultDto registrationResultDto =
                registerFacade.register(
                        new RegisterUserDto(
                                registerUserDto.username(), registerUserDto.email(),
                                registerUserDto.role(), encodedPassword
                        )
                );
        return ResponseEntity.status(HttpStatus.CREATED).body(registrationResultDto);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> authenticateAndGenerateToken(@Valid @RequestBody TokenRequestDto tokenRequestDto) throws UsernameWhileTryingToLogInNotFoundException {
        try {
            registerFacade.findByUsername(tokenRequestDto.username());
            final LoginResponseDto loginResponseDto = jwtAuthenticatorService.authenticateAndGenerateToken(tokenRequestDto);
            return ResponseEntity.ok(loginResponseDto);
        } catch (UsernameNotFoundException exception) {
            throw new UsernameWhileTryingToLogInNotFoundException("Invalid username or password");
        }
    }
}
