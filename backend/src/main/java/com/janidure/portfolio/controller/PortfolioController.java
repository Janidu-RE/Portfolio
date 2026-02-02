package com.janidure.portfolio.controller;

import com.janidure.portfolio.model.ContactMessage;
import com.janidure.portfolio.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PortfolioController {

    private final ContactRepository contactRepository;

    @PostMapping("/contact")
    public ResponseEntity<String> saveMessage(@RequestBody ContactMessage message) {
        contactRepository.save(message);
        return ResponseEntity.ok("Message received!");
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Backend is running";
    }
}
