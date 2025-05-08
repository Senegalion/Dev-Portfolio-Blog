package com.portfolio.backend.shared.exception;

public class UsernameWhileTryingToLogInNotFoundException extends RuntimeException {
    public UsernameWhileTryingToLogInNotFoundException(String message) {
        super(message);
    }
}
