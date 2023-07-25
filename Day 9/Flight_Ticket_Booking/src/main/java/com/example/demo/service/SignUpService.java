package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.repository.SignUpRepo;
import com.example.demo.model.SignUp;

@Service
public class SignUpService {
	
@Autowired
SignUpRepo repository;

public String addsignup(SignUp Signup) {
	repository.save(Signup);
	return "added";
}

public List<SignUp> getsignup(){
	return repository.findAll();
}

public String deletesignupById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public String Updatesignup(SignUp Signup) {
	repository.save(Signup);
	return "saved";
}

}