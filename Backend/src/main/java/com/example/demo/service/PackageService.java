package com.example.demo.service;

import com.example.demo.dto.PackageDTO;

import java.util.List;

public interface PackageService {

    PackageDTO createPackage(PackageDTO packageDTO);

    PackageDTO getPackageById(Long id);

    List<PackageDTO> getAllPackages();

    PackageDTO updatePackage(Long id, PackageDTO packageDTO);

    void deletePackage(Long id);
}
