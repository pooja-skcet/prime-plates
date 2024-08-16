package com.example.demo.dto;

public class AdminAddDTO {

    private String name;              // Name of the menu item
    private String description;       // Description of the menu item
    private String packageType;       // Package type reference (ID or name)
    private String type;              // Type of the menu item (e.g., appetizer, main course)
    private String veg;               // Indicates if the item is vegetarian or non-vegetarian
    private double price;             // Price of the menu item
    private String image;             // URL or path to the image of the menu item

    // Getters and Setters

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

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getVeg() {
        return veg;
    }

    public void setVeg(String veg) {
        this.veg = veg;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
