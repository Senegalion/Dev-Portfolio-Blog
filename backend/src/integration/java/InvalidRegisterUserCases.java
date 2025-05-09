import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.stream.Stream;

public class InvalidRegisterUserCases {
    public static Stream<AuthIntegrationTest.InvalidCase> invalidUserInputs() {
        return Stream.of(
                new AuthIntegrationTest.InvalidCase(null, "user@example.com", "USER", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("", "user@example.com", "USER", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", null, "USER", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "", "USER", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "invalid-email", "USER", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "user@example.com", null, "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "user@example.com", "", "password", MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "user@example.com", "USER", null, MockMvcResultMatchers.status().isBadRequest()),
                new AuthIntegrationTest.InvalidCase("username", "user@example.com", "USER", "", MockMvcResultMatchers.status().isBadRequest())
        );
    }
}
