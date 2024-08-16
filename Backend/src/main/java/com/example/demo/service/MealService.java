package com.example.demo.service;

import com.example.demo.entity.Meal;
import com.example.demo.dto.MealDTO;
import java.util.List;

public interface MealService {
    List<Meal> getMealsByTypeAndCategory(String type, String category);
    Meal createMeal(MealDTO mealDTO);
}
