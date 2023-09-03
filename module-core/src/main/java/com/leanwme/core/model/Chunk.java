package com.leanwme.core.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "chunks")
public class Chunk {
    @Id
    private String id;
    private int type;
    private String category;
    private String title;
    private String content;

    public Chunk(String title, String content, String category, int type) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.type = type;
    }

}
