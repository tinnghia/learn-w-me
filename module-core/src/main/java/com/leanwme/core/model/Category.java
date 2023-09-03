package com.leanwme.core.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "categories")
public class Category {
    @Id
    private String id;
    private String code;
    private String parentCode;
    private String description;

    public Category(String code, String parentCode,  String description) {
        this.code = code;
        this.parentCode = parentCode;
        this.description = description;
    }
}
