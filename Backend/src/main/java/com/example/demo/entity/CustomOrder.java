package com.example.demo.entity;

import jakarta.persistence.*;

@Table(name = "customorder_table")
@Entity
public class CustomOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the custom order

    private String breakfast;  // Breakfast menu item
    private String lunch;  // Lunch menu item
    private String dinner;  // Dinner menu item
    private String breakfastType;  // Type of breakfast ( Veg, Nonveg)
    private String lunchType;  // Type of lunch 
    private String dinnerType;  // Type of dinner 
    private int orderCount;  // Quantity of the order
    private String userName;  // Username of the person placing the order
    private String address;  // Delivery address
    private String date;  // Date of the order
    private String time;  // Time of the order
    private String city;  // City of the delivery

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(String breakfast) {
        this.breakfast = breakfast;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }

    public String getBreakfastType() {
        return breakfastType;
    }

    public void setBreakfastType(String breakfastType) {
        this.breakfastType = breakfastType;
    }

    public String getLunchType() {
        return lunchType;
    }

    public void setLunchType(String lunchType) {
        this.lunchType = lunchType;
    }

    public String getDinnerType() {
        return dinnerType;
    }

    public void setDinnerType(String dinnerType) {
        this.dinnerType = dinnerType;
    }

    public int getOrderCount() {
        return orderCount;
    }

    public void setOrderCount(int orderCount) {
        this.orderCount = orderCount;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
