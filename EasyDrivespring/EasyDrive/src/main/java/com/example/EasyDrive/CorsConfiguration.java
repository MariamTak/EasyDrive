package com.example.EasyDrive;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8081") // Changez l'URL si nécessaire
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Ajoutez OPTIONS
                .allowedHeaders("*") // Autoriser tous les en-têtes
                .allowCredentials(true); 
    }
}
