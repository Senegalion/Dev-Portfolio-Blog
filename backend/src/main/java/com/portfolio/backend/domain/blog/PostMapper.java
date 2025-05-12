package com.portfolio.backend.domain.blog;

import com.portfolio.backend.domain.blog.dto.AuthorDto;
import com.portfolio.backend.domain.blog.dto.CommentDto;
import com.portfolio.backend.domain.blog.dto.PostDetailsDto;
import com.portfolio.backend.domain.blog.dto.PostDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {
    PostDto toDto(PostEntity entity);

    List<PostDto> toDtoList(List<PostEntity> entities);

    default PostDetailsDto toDetailsDto(PostEntity entity) {
        return new PostDetailsDto(
                entity.getSlug(),
                entity.getTitle(),
                entity.getExcerpt(),
                entity.getContent(),
                entity.getPublishedAt(),
                mapComments(entity.getComments())
        );
    }

    default List<CommentDto> mapComments(List<CommentEntity> comments) {
        return comments.stream()
                .map(this::mapComment)
                .toList();
    }

    default CommentDto mapComment(CommentEntity comment) {
        return new CommentDto(
                new AuthorDto(comment.getUser().getUsername()),
                comment.getContent(),
                comment.getCreatedAt()
        );
    }
}
