package com.portfolio.backend.domain.register;

import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import com.portfolio.backend.domain.register.dto.RegistrationResultDto;
import com.portfolio.backend.domain.register.dto.UserDto;
import com.portfolio.backend.shared.exception.InvalidUserCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RegisterFacade {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;

    @Autowired
    public RegisterFacade(UserRepository userRepository, RoleRepository roleRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userMapper = userMapper;
    }

    public UserDto findByUsername(String username) {
        UserEntity userEntity = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Set<RoleName> roles = userEntity.getRoleEntities().stream()
                .map(RoleEntity::getRoleName)
                .collect(Collectors.toSet());

        return new UserDto(
                userEntity.getUserId(),
                userEntity.getUsername(),
                userEntity.getPassword(),
                roles
        );
    }

    @Transactional
    public RegistrationResultDto register(RegisterUserDto registerUserDto) {
        validateRegistrationData(registerUserDto);

        RoleEntity roleEntity = roleRepository.findByRoleName(RoleName.valueOf("ROLE_" + registerUserDto.role().toUpperCase()))
                .orElseThrow(() -> new InvalidUserCredentialsException("Role not found"));

        UserEntity user = userMapper.mapFromUserDto(registerUserDto);
        user.getRoleEntities().add(roleEntity);

        UserEntity savedUser = userRepository.save(user);

        return RegistrationResultDto.builder()
                .userId(savedUser.getUserId())
                .username(registerUserDto.username())
                .email(registerUserDto.email())
                .build();
    }

    private static void validateWhetherRegistrationDataAreNull(RegisterUserDto registerUserDto) {
        if (registerUserDto.username() == null || registerUserDto.email() == null
                || registerUserDto.password() == null || registerUserDto.role() == null) {
            throw new InvalidUserCredentialsException("User data cannot be null");
        }
    }

    private void validateRegistrationData(RegisterUserDto registerUserDto) {
        validateWhetherRegistrationDataAreNull(registerUserDto);
        validateRole(registerUserDto.role());
    }

    private void validateRole(String role) {
        try {
            RoleName.valueOf("ROLE_" + role.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new InvalidUserCredentialsException(String.format("Invalid Role: [%s]", role));
        }
    }
}
