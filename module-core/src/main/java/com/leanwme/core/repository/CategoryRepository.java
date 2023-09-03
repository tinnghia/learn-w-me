package com.leanwme.core.repository;

import com.leanwme.core.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, String> {
    List<Category> findByParentCode(String parentCode);
}
