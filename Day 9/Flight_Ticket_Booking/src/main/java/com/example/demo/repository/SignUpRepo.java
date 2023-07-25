package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SignUp;
@Repository
public interface SignUpRepo extends JpaRepository <SignUp,Integer> {
    
//	Optional <Signup> findByUsernameAndPassword(String username, String password);
}