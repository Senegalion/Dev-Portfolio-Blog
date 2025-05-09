import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.backend.domain.register.RoleEntity;
import com.portfolio.backend.domain.register.RoleName;
import com.portfolio.backend.domain.register.RoleRepository;
import com.portfolio.backend.domain.register.dto.RegisterUserDto;
import com.portfolio.backend.domain.register.dto.RegistrationResultDto;
import com.portfolio.backend.infrastructure.security.jwt.dto.LoginResponseDto;
import com.portfolio.backend.infrastructure.security.jwt.dto.TokenRequestDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.ResultMatcher;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class AuthIntegrationTest extends AbstractIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    RoleRepository roleRepository;

    @BeforeEach
    void setUp() {
        if (!roleRepository.existsByRoleName(RoleName.ROLE_USER)) {
            RoleEntity userRole = new RoleEntity();
            userRole.setRoleName(RoleName.ROLE_USER);
            roleRepository.save(userRole);
        }

        if (!roleRepository.existsByRoleName(RoleName.ROLE_ADMIN)) {
            RoleEntity adminRole = new RoleEntity();
            adminRole.setRoleName(RoleName.ROLE_ADMIN);
            roleRepository.save(adminRole);
        }
    }

    @Test
    void user_should_register_and_login_successfully() throws Exception {
        // STEP 1 - USER REGISTERS
        // given
        String username = "username";
        String email = "user@gmail.com";
        String role = "USER";
        String password = "password";

        RegisterUserDto user = new RegisterUserDto(username, email, role, password);

        // when
        ResultActions performForRegistration = mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)));

        // then
        MvcResult mvcRegistrationResult = performForRegistration.andExpect(status().isCreated()).andReturn();
        String json = mvcRegistrationResult.getResponse().getContentAsString();
        RegistrationResultDto registrationResultDto = objectMapper.readValue(json, RegistrationResultDto.class);
        assertAll(
                () -> assertNotNull(registrationResultDto.userId()),
                () -> assertThat(registrationResultDto.username()).isEqualTo(username),
                () -> assertThat(registrationResultDto.email()).isEqualTo(email)
        );

        // STEP 2 - USER LOGIN
        // given
        TokenRequestDto newUser = new TokenRequestDto(username, password);

        // when
        ResultActions performForLogin = mockMvc.perform(post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newUser)));

        // then
        MvcResult mvcLoginResult = performForLogin.andExpect(status().isOk()).andReturn();
        String loginJson = mvcLoginResult.getResponse().getContentAsString();
        LoginResponseDto loginResponseDto = objectMapper.readValue(loginJson, LoginResponseDto.class);
        assertAll(
                () -> assertThat(loginResponseDto.username()).isEqualTo(username),
                () -> assertThat(loginResponseDto.token()).isNotNull()
        );
    }

    @ParameterizedTest
    @MethodSource("InvalidRegisterUserCases#invalidUserInputs")
    void should_return_error_for_invalid_input(InvalidCase testCase) throws Exception {
        // given
        RegisterUserDto dto = new RegisterUserDto(
                testCase.username(),
                testCase.email(),
                testCase.role(),
                testCase.password()
        );

        // when && then
        mockMvc.perform(post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(testCase.expectedStatus());
    }

    public record InvalidCase(
            String username,
            String email,
            String role,
            String password,
            ResultMatcher expectedStatus
    ) {
    }
}
