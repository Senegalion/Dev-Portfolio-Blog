import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import com.portfolio.backend.infrastructure.security.jwt.dto.TokenRequestDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

@AutoConfigureWebTestClient
public class AuthIntegrationTest extends AbstractIntegrationTest {
    @Autowired
    WebTestClient webTestClient;

    @Test
    void user_should_register_and_login_successfully() {
        // given
        RegisterUserDto user = new RegisterUserDto(
                "username", "user@gmail.com", "USER", "password"
        );
        TokenRequestDto login = new TokenRequestDto("username", "password");

        // when && then
        webTestClient.post().uri("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(user)
                .exchange()
                .expectStatus().isCreated();

        webTestClient.post().uri("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(login)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$.token").isNotEmpty();
    }
}
