package com.example.demo.service.impl;

import com.example.demo.dto.PackageDTO;
import com.example.demo.entity.Package;
import com.example.demo.repository.PackageRepository;
import com.example.demo.service.PackageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PackageServiceImpl implements PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PackageDTO createPackage(PackageDTO packageDTO) {
        Package pack = modelMapper.map(packageDTO, Package.class);
        pack = packageRepository.save(pack);
        return modelMapper.map(pack, PackageDTO.class);
    }

    @Override
    public PackageDTO getPackageById(Long id) {
        Package pack = packageRepository.findById(id).orElseThrow(() -> new RuntimeException("Package not found"));
        return modelMapper.map(pack, PackageDTO.class);
    }

    @Override
    public List<PackageDTO> getAllPackages() {
        return packageRepository.findAll().stream()
                .map(pack -> modelMapper.map(pack, PackageDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public PackageDTO updatePackage(Long id, PackageDTO packageDTO) {
        Package pack = packageRepository.findById(id).orElseThrow(() -> new RuntimeException("Package not found"));
        modelMapper.map(packageDTO, pack);
        pack = packageRepository.save(pack);
        return modelMapper.map(pack, PackageDTO.class);
    }

    @Override
    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }
}
