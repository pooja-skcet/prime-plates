package com.example.demo.controller;

import com.example.demo.dto.PackageDTO;
import com.example.demo.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "http://localhost:3000")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @PostMapping
    public ResponseEntity<PackageDTO> createPackage(@RequestBody PackageDTO packageDTO) {
        return ResponseEntity.ok(packageService.createPackage(packageDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PackageDTO> getPackageById(@PathVariable Long id) {
        return ResponseEntity.ok(packageService.getPackageById(id));
    }

    @GetMapping
    public ResponseEntity<List<PackageDTO>> getAllPackages() {
        return ResponseEntity.ok(packageService.getAllPackages());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PackageDTO> updatePackage(@PathVariable Long id, @RequestBody PackageDTO packageDTO) {
        return ResponseEntity.ok(packageService.updatePackage(id, packageDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable Long id) {
        packageService.deletePackage(id);
        return ResponseEntity.noContent().build();
    }
}
