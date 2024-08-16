package com.example.demo.service.impl;

import com.example.demo.entity.Meal;
import com.example.demo.dto.MealDTO;
import com.example.demo.repository.MealRepository;
import com.example.demo.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealServiceImpl implements MealService {

    @Autowired
    private MealRepository mealRepository;

    @Override
    public List<Meal> getMealsByTypeAndCategory(String type, String category) {
        return mealRepository.findByTypeAndCategory(type, category);
    }
    
    @Override
    public Meal createMeal(MealDTO mealDTO) {
        Meal meal = new Meal();
        meal.setName(mealDTO.getName());
        meal.setType(mealDTO.getType());
        meal.setCategory(mealDTO.getCategory());
        meal.setPrice(mealDTO.getPrice());
        return mealRepository.save(meal);
    }
}
