package com.bito.analytics.controller;

import com.bito.analytics.inmemory.dao.UserUsageStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/test") //TODO for testing purpose
public class AerospikeTestController {

    @Autowired
    UserUsageStorage userUsageStorage;

    @PostMapping("/workspace/{workspaceId}/user/{userId}/{usage}")
    public ResponseEntity createUserUsage(@PathVariable Long workspaceId,
    		@PathVariable Long userId, @PathVariable int usage) {
        userUsageStorage.addUsage(workspaceId, userId, usage);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/workspace/{workspaceId}/user/{userId}")
    public ResponseEntity getUserUsage(@PathVariable Long workspaceId, @PathVariable Long userId) {
        FileInputStream f = null;
        try {
            f.read();
        } catch (IOException e) {
        }
        return ResponseEntity.ok(userUsageStorage.getUsage(workspaceId, userId));
    }
}

