package com.example.demo.controller;

import com.example.demo.entity.Meal;
import com.example.demo.dto.MealDTO;
import com.example.demo.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @GetMapping
    public List<Meal> getMeals(
            @RequestParam String type, 
            @RequestParam String category) {
        return mealService.getMealsByTypeAndCategory(type, category);
    }
    
    @PostMapping("/add")
    public Meal createMeal(@RequestBody MealDTO mealDTO) {
        return mealService.createMeal(mealDTO);
    }
}
