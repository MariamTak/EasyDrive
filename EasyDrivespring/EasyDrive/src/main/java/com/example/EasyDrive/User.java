package com.example.EasyDrive;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long user_id;
    @JsonIgnore
    @Column(nullable = false, unique = true)
    private String phoneNumber;
    
    @JsonIgnore
    @Column(nullable = false)
    private String fullName;
    
    @JsonIgnore
    @Column(nullable = false, unique = true)
    private String email;
    
    @JsonIgnore
    @Column(nullable = false)
    private String password;
    
    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<voiture> voitures;

   
	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	

	public Set<voiture> getVoitures() {
		return voitures;
	}

	public void setVoitures(Set<voiture> voitures) {
		this.voitures = voitures;
	}



	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public User() {}

	


	public User(Long user_id) {
    this.user_id = user_id;
   
}

@Override
public String toString() {
    return "User{" +
            "user_id=" + user_id +
           
            '}';
}
}

