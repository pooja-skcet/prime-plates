package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "orders_table") // Table name in the database
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremented primary key
    private Long id;

    @Column(nullable = false) // Non-nullable column
    private String menuItemName; // Name of the menu item ordered

    @Column(nullable = false) // Non-nullable column
    private double price; // Price of the order

    @Column(nullable = false) // Non-nullable column
    private String address; // Delivery address for the order

    @Column(nullable = false) // Non-nullable column
    private String date; // Date of the order

    @Column(nullable = false) // Non-nullable column
    private String time; // Time of the order

    @Column(nullable = false) // Non-nullable column
    private String paymentMode; // Payment mode used for the order

    @Column(nullable = false) // Non-nullable column
    private String contactNumber; // Contact number of the customer

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMenuItemName() {
        return menuItemName;
    }

    public void setMenuItemName(String menuItemName) {
        this.menuItemName = menuItemName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
