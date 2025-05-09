package com.portfolio.backend.infrastructure.security.jwt;

import com.portfolio.backend.domain.register.RegisterFacade;
import com.portfolio.backend.domain.register.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
public class LoginUserDetailsService implements UserDetailsService {
    private final RegisterFacade registerFacade;

    @Override
    public UserDetails loadUserByUsername(String username) throws BadCredentialsException {
        UserDto userFound = registerFacade.findByUsername(username);
        return getUser(userFound);
    }

    private User getUser(UserDto userDto) {
        List<GrantedAuthority> authorities = userDto.roles().stream()
                .map(role -> new SimpleGrantedAuthority(role.name()))
                .collect(Collectors.toList());

        return new User(
                userDto.username(),
                userDto.password(),
                authorities
        );
    }
}
