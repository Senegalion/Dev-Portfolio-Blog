package com.portfolio.backend.domain.register;

import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "username", source = "username")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "password", source = "password")
    UserEntity mapFromUserDto(RegisterUserDto dto);
}
