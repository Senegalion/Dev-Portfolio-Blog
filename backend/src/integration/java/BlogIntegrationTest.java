import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.backend.domain.blog.PostEntity;
import com.portfolio.backend.domain.blog.PostRepository;
import com.portfolio.backend.domain.blog.dto.PostDetailsDto;
import com.portfolio.backend.domain.blog.dto.PostDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class BlogIntegrationTest extends AbstractIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    PostRepository postRepository;

    @BeforeEach
    void setUp() {
        postRepository.deleteAll();

        PostEntity post1 = new PostEntity();
        post1.setSlug("first-post");
        post1.setTitle("First Post");
        post1.setExcerpt("This is the first post");
        post1.setContent("Full content of the first post");
        post1.setPublishedAt(LocalDate.now());

        PostEntity post2 = new PostEntity();
        post2.setSlug("second-post");
        post2.setTitle("Second Post");
        post2.setExcerpt("This is the second post");
        post2.setContent("Full content of the second post");
        post2.setPublishedAt(LocalDate.now());

        postRepository.saveAll(List.of(post1, post2));
    }

    @Test
    @WithMockUser
    void should_return_200_ok_when_user_wants_to_get_all_available_posts() throws Exception {
        // given && when
        MvcResult result = mockMvc.perform(get("/posts")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        // then
        String responseBody = result.getResponse().getContentAsString();
        PostDto[] posts = objectMapper.readValue(responseBody, PostDto[].class);

        assertThat(posts).hasSize(2);
        assertThat(posts[0].slug()).isNotBlank();
        assertThat(posts[0].title()).isNotBlank();
    }

    @Test
    @WithMockUser
    void should_return_200_ok_when_user_wants_to_see_particular_post() throws Exception {
        // given && when
        MvcResult result = mockMvc.perform(get("/posts/first-post")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        // then
        String responseBody = result.getResponse().getContentAsString();
        PostDetailsDto post = objectMapper.readValue(responseBody, PostDetailsDto.class);

        assertThat(post.slug()).isEqualTo("first-post");
        assertThat(post.title()).isEqualTo("First Post");
        assertThat(post.content()).contains("Full content");
        assertThat(post.comments()).isEmpty();
    }

    @Test
    @WithMockUser
    void should_return_404_not_found_when_post_not_found() throws Exception {
        // given && when && then
        mockMvc.perform(get("/posts/non-existent-slug"))
                .andExpect(status().isNotFound());
    }
}
