package com.example.EasyDrive;


public class UserDTO {
    private Long user_id;
    private String phoneNumber;
    private String fullName;
    private String email;

	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
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
	public UserDTO(Long user_id, String phoneNumber, String fullName, String email) {
		super();
		this.user_id = user_id;
		this.phoneNumber = phoneNumber;
		this.fullName = fullName;
		this.email = email;
	}

public UserDTO() {}
}

