package com.example.demo.service;

import com.example.demo.dto.MenuItemDTO;
import java.util.List;

public interface MenuItemService {
	
	// Retrieve a list of menu items based on package type
    List<MenuItemDTO> getMenuItemsByPackageType(String packageType);
   
    // Create a new menu item
	MenuItemDTO createMenuItems(MenuItemDTO menuItemDTO);
}
