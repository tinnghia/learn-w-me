package com.leanwme.core.controller;

import com.leanwme.core.model.Chunk;
import com.leanwme.core.repository.ChunkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ChunkController {
    @Autowired
    ChunkRepository chunkRepository;

    @GetMapping("/chunks")
    public ResponseEntity<List<Chunk>> getAllChunks(@RequestParam(required = false) String title) {
        try {
            List<Chunk> chunks = new ArrayList<>();

            if (title == null)
                chunkRepository.findAll().forEach(chunks::add);
            if (chunks.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(chunks, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/chunks/{id}")
    public ResponseEntity<Chunk> getChunkById(@PathVariable("id") String id) {
        Optional<Chunk> chunkData = chunkRepository.findById(id);

        if (chunkData.isPresent()) {
            return new ResponseEntity<>(chunkData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/chunks")
    public ResponseEntity<Chunk> createChunk(@RequestBody Chunk chunk) {
        try {
            Chunk _chunk = chunkRepository.save(new Chunk(chunk.getTitle(), chunk.getContent(), chunk.getCategory(), chunk.getType()));
            return new ResponseEntity<>(_chunk, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/chunks/{id}")
    public ResponseEntity<Chunk> updateChunk(@PathVariable("id") String id, @RequestBody Chunk chunk) {
        Optional<Chunk> chunkData = chunkRepository.findById(id);

        if (chunkData.isPresent()) {
            Chunk _chunk = chunkData.get();
            _chunk.setTitle(chunk.getTitle());
            _chunk.setContent(chunk.getContent());
            _chunk.setCategory(chunk.getCategory());
            _chunk.setType(chunk.getType());
            return new ResponseEntity<>(chunkRepository.save(_chunk), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/chunks/{id}")
    public ResponseEntity<HttpStatus> deleteChunk(@PathVariable("id") String id) {
        try {
            chunkRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/chunks")
    public ResponseEntity<HttpStatus> deleteAllChunks() {
        try {
            chunkRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
