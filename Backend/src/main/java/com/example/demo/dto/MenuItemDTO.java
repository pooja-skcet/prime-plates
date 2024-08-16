package com.example.demo.dto;

public class MenuItemDTO {

    private Long id;
    private String name;
    private String description;
    private boolean veg;
    private int reviews;
    private double rating;
    private String image;
    private String packageType;

    // Default constructor
    public MenuItemDTO() {}

    // Parameterized constructor
    public MenuItemDTO(Long id, String name, String description, boolean veg, int reviews, double rating, String image, String packageType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.veg = veg;
        this.reviews = reviews;
        this.rating = rating;
        this.image = image;
        this.packageType = packageType;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isVeg() {
        return veg;
    }

    public void setVeg(boolean veg) {
        this.veg = veg;
    }

    public int getReviews() {
        return reviews;
    }

    public void setReviews(int reviews) {
        this.reviews = reviews;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }
}
