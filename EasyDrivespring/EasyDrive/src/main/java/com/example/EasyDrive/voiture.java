package com.example.EasyDrive;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class voiture implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String marque;
    @Column(nullable = false)
    private String model;
    @Column(nullable = false, unique = true)
    private String immatriculation;
    @Column(nullable = false)
    private String country;
    @Column(nullable = false)
    private int year;
    @Column(nullable = false)
    private String kilometrage;
    @Column(nullable = false)
    private String agence;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(nullable = false)
    private String carburant;
    @Column(nullable = false)
    private String boite; 
    @Column(nullable = false)
    private int selectedDoors;
    @Column(nullable = false)
    private int selectedSeats;
    @Column(nullable = false)
    private String lieu;
    @Column(nullable = false)
    private int prix;
    @Column(nullable = false)
    private String startDate;
    @Column(nullable = false)
    private String endDate;

    // Default constructor
    public voiture() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String modele) {
		this.model = modele;
	}

	public String getImmatriculation() {
		return immatriculation;
	}

	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}

	

	

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAgence() {
		return agence;
	}

	public void setAgence(String agence) {
		this.agence = agence;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	

	public String getCarburant() {
		return carburant;
	}

	public void setCarburant(String carburant) {
		this.carburant = carburant;
	}

	public String getBoite() {
		return boite;
	}

	public void setBoite(String boite) {
		this.boite = boite;
	}

	public int getSelectedDoors() {
		return selectedDoors;
	}

	public void setSelectedDoors(int selectedDoors) {
		this.selectedDoors = selectedDoors;
	}

	public int getSelectedSeats() {
		return selectedSeats;
	}

	public void setSelectedSeats(int selectedSeats) {
		this.selectedSeats = selectedSeats;
	}

	public String getLieu() {
		return lieu;
	}

	public void setLieu(String lieu) {
		this.lieu = lieu;
	}

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getKilometrage() {
		return kilometrage;
	}

	public void setKilometrage(String kilometrage) {
		this.kilometrage = kilometrage;
	}

	public int getPrix() {
		return prix;
	}

	public void setPrix(int prix) {
		this.prix = prix;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
	public voiture(Long id, String marque, String model, String immatriculation, String country, int year,
            String kilometrage, String agence, User user, String carburant, String boite,
            int selectedDoors, int selectedSeats, String lieu, int prix, String startDate, String endDate) {
		super();
 this.id = id;
 this.marque = marque;
 this.model = model;
 this.immatriculation = immatriculation;
 this.country = country;
 this.year = year;
 this.kilometrage = kilometrage;
 this.agence = agence;
 this.user = user;
 this.carburant = carburant;
 this.boite = boite;
 this.selectedDoors = selectedDoors;
 this.selectedSeats = selectedSeats;
 this.lieu = lieu;
 this.prix = prix;
 this.startDate = startDate;
 this.endDate = endDate;
}




}