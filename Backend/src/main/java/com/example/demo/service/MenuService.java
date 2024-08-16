package com.example.demo.service;

import com.example.demo.dto.MenuDTO;

import java.util.List;

import java.util.List;

public interface MenuService {
    List<MenuDTO> getMenuItems(String dayOfWeek, String session, String type, boolean veg);
    MenuDTO createOrUpdateMenuItem(MenuDTO menuDTO);
}
