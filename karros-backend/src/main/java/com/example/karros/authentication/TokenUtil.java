package com.example.karros.authentication;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.List;

@Service
public class TokenUtil {
    private static String TOKEN_KEY;

    @Autowired
    public TokenUtil(@Value("${token_secret_key}") String TOKEN_KEY) { this.TOKEN_KEY = TOKEN_KEY; }

    private static final String ISSUER = "Karros";

    private static final String TOKEN_HEADER = "Bearer ";


    public static String encodeToken(String email, String role){
        Key secretKey = Keys.hmacShaKeyFor(TOKEN_KEY.getBytes());
        String tokenJWT = Jwts.builder().setSubject(email)
                .setAudience(role)
                .setIssuer(ISSUER)
                .signWith(secretKey, SignatureAlgorithm.HS256).compact();
        return TOKEN_HEADER + tokenJWT;
    }
    public static Authentication decodeToken(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization");
        jwtToken = jwtToken.replace(TOKEN_HEADER, "");
        Jws<Claims> jwsClaims = Jwts.parserBuilder().setSigningKey(TOKEN_KEY.getBytes()).build().parseClaimsJws(jwtToken);
        String userEmail = jwsClaims.getBody().getSubject();
        String emissor = jwsClaims.getBody().getIssuer();
        String role = jwsClaims.getBody().getAudience();
        if(userEmail.length()>0 && emissor.equals(ISSUER)){
            return new UsernamePasswordAuthenticationToken(userEmail, null,
                    List.of(new SimpleGrantedAuthority(role)));
        }
        return null;
    }
}
