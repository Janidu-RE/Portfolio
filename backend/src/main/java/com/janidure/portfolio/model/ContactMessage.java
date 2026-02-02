package com.janidure.portfolio.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "messages")
public class ContactMessage {
    @Id
    private String id;
    private String name;
    private String email;
    private String message;
    private LocalDateTime timestamp = LocalDateTime.now();
}
