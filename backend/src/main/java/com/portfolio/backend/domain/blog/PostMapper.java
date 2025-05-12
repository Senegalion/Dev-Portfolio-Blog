package com.portfolio.backend.domain.blog;

import com.portfolio.backend.domain.blog.dto.PostDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {
    PostDto toDto(PostEntity entity);

    List<PostDto> toDtoList(List<PostEntity> entities);
}
