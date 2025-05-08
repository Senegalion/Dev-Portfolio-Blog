package com.portfolio.backend.infrastructure.clock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Clock {
    @Bean
    java.time.Clock clock() {
        return java.time.Clock.systemUTC();
    }
}
