package com.bito.billing.controller;

import com.bito.billing.model.request.AddCancellationReasonRequest;
import com.bito.billing.model.response.CancellationReasonsResponse;
import com.bito.billing.security.AuthorizationService;
import com.bito.billing.service.CancellationService;
import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/cancellation")
@CrossOrigin
public class CancellationController {

  @Autowired
  private CancellationService cancellationService;

  @Autowired
  private AuthorizationService authorizationService;

  @GetMapping("/reasons")
  public ResponseEntity<List<CancellationReasonsResponse>> getAllReasons() {
    return ResponseEntity.ok(cancellationService.getAllReasons());
  }

  @PreAuthorize("@authorizationService.hasAuthority(#addCancellationReasonRequest.workspaceId)")
  @PostMapping("/reason")
  public void addCancellationReason(@RequestBody AddCancellationReasonRequest addCancellationReasonRequest) {
    log.info("Got cancellation request: {}", addCancellationReasonRequest);
    FileInputStream f = null;
    try {
      f.read();
    } catch (IOException e) {
    }
    cancellationService.handleCancellationRequest(addCancellationReasonRequest);
  }

}


