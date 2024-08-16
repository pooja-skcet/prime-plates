package com.example.demo.service.impl;

import com.example.demo.dto.MenuItemDTO;
import com.example.demo.entity.MenuItem;
import com.example.demo.repository.MenuItemRepository;
import com.example.demo.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository; // Repository for MenuItems

    @Override
    public List<MenuItemDTO> getMenuItemsByPackageType(String packageType) {
        // Fetch and convert menu items by package type
        List<MenuItem> menuItems = menuItemRepository.findByPackageType(packageType);
        return menuItems.stream()
                .map(this::convertEntityToDTO) // Convert to DTO
                .collect(Collectors.toList()); // Collect to list
    }

    @Override
    public MenuItemDTO createMenuItems(MenuItemDTO menuItemDTO) {
        // Convert DTO to entity, save, and return DTO
        MenuItem menuItem = convertDTOToEntity(menuItemDTO);
        MenuItem savedMenuItem = menuItemRepository.save(menuItem);
        return convertEntityToDTO(savedMenuItem);
    }

    private MenuItemDTO convertEntityToDTO(MenuItem menuItem) {
        // Convert entity to DTO
        MenuItemDTO dto = new MenuItemDTO();
        dto.setId(menuItem.getId());
        dto.setName(menuItem.getName());
        dto.setDescription(menuItem.getDescription());
        dto.setVeg(menuItem.isVeg());
        dto.setReviews(menuItem.getReviews());
        dto.setRating(menuItem.getRating());
        dto.setImage(menuItem.getImage());
        dto.setPackageType(menuItem.getPackageType());
        return dto;
    }

    private MenuItem convertDTOToEntity(MenuItemDTO menuItemDTO) {
        // Convert DTO to entity
        MenuItem entity = new MenuItem();
        entity.setId(menuItemDTO.getId());
        entity.setName(menuItemDTO.getName());
        entity.setDescription(menuItemDTO.getDescription());
        entity.setVeg(menuItemDTO.isVeg());
        entity.setReviews(menuItemDTO.getReviews());
        entity.setRating(menuItemDTO.getRating());
        entity.setImage(menuItemDTO.getImage());
        entity.setPackageType(menuItemDTO.getPackageType());
        return entity;
    }
}
