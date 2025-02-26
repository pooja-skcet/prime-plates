package com.example.demo.service.impl;

import com.example.demo.dto.MenuDTO;
import com.example.demo.entity.Menu;
import com.example.demo.repository.MenuRepository;
import com.example.demo.service.MenuService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public List<MenuDTO> getMenuItems(String dayOfWeek, String session, String type, boolean veg) {
        return menuRepository.findByDayOfWeekAndSessionAndTypeAndVeg(dayOfWeek, session, type, veg)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private MenuDTO convertToDTO(Menu menu) {
        MenuDTO dto = new MenuDTO();
        dto.setId(menu.getId());
        dto.setDayOfWeek(menu.getDayOfWeek());
        dto.setType(menu.getType());
        dto.setPrice(menu.getPrice());
        dto.setDescription(menu.getDescription());
        dto.setCuisine(menu.getCuisine());
        dto.setSession(menu.getSession());
        dto.setVeg(menu.isVeg());
        dto.setImage(menu.getImage());
        return dto;
    }
    @Override
    public MenuDTO createOrUpdateMenuItem(MenuDTO menuDTO) {
        Menu menu = convertToEntity(menuDTO);
        menu = menuRepository.save(menu); // Save or update
        return convertToDTO(menu);
    }


    private Menu convertToEntity(MenuDTO dto) {
        Menu menu = new Menu();
        menu.setId(dto.getId());
        menu.setDayOfWeek(dto.getDayOfWeek());
        menu.setType(dto.getType());
        menu.setPrice(dto.getPrice());
        menu.setDescription(dto.getDescription());
        menu.setCuisine(dto.getCuisine());
        menu.setSession(dto.getSession());
        menu.setVeg(dto.isVeg());
        menu.setImage(dto.getImage());
        return menu;
    }
}
