package com.example.karros.authentication;

import com.example.karros.exception.ApiRequestException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class AuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            if (request.getHeader("Authorization") != null) {
                Authentication auth = TokenUtil.decodeToken(request);
                if (auth != null) {
                    SecurityContextHolder.getContext().setAuthentication(auth);
                } else {
                    throw new ApiRequestException("Usuário não autorizado!");
                }
            }
            filterChain.doFilter(request, response);
        }catch (RuntimeException e){
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("Usuário não autorizado!");
        }
    }
}
