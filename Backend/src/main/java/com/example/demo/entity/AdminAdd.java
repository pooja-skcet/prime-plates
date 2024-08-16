package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "admin_table")
public class AdminAdd {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the menu item

    private String name;           // Name of the menu item
    private String description;    // Description of the menu item
    private String packageType;    // Type of package (e.g., Premium, Standard)
    private String type;           // Type of menu item (e.g., appetizer, main course)
    private String veg;            // Indicates if the item is vegetarian or non-vegetarian
    private double price;          // Price of the menu item
    private String image;          // URL or path to the image of the menu item

    // Default constructor
    public AdminAdd() {}

    // Parameterized constructor
    public AdminAdd(String name, String description, String packageType, String type, String veg, double price, String image) {
        this.name = name;
        this.description = description;
        this.packageType = packageType;
        this.type = type;
        this.veg = veg;
        this.price = price;
        this.image = image;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getVeg() {
        return veg;
    }

    public void setVeg(String veg) {
        this.veg = veg;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
