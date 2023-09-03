package com.leanwme.core.repository;

import com.leanwme.core.model.Chunk;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChunkRepository extends MongoRepository<Chunk, String> {
}
