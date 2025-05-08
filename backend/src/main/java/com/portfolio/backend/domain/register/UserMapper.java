package com.portfolio.backend.domain.register;

import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserEntity mapFromUserDto(RegisterUserDto dto);
}
