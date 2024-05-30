package com.example.EasyDrive;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




public interface userRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
