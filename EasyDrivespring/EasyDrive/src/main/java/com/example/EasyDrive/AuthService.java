package com.example.EasyDrive;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

	 @Autowired
	    private userRepository userRepository;

	    public UserDTO authenticateUser(String email, String password) {
	        User user = userRepository.findByEmail(email);
	        if (user != null && password.equals(user.getPassword())) {
	            return convertToDTO(user);
	        }
	        throw new RuntimeException("Invalid credentials");
	    }

    public UserDTO registerUser(String phoneNumber, String fullName, String email, String password) {
        User newUser = new User();
        newUser.setPhoneNumber(phoneNumber);
        newUser.setFullName(fullName);
        newUser.setEmail(email);
        newUser.setPassword(password);
        User user=userRepository.save(newUser);
        return convertToDTO(user);
    }
    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setUser_id(user.getUser_id());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setFullName(user.getFullName());
        dto.setEmail(user.getEmail());
        // You can include other user details here
        return dto;
    }
}

