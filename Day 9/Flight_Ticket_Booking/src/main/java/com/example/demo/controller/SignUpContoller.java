package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.SignUpService;
//import com.example.demo.model.Login;
import com.example.demo.model.SignUp;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")
public class SignUpContoller {
	
	@Autowired
	SignUpService service;
	
	@PostMapping("/post")
	public String add(@RequestBody SignUp Signup ) {
		return service.addsignup(Signup);
	}
	
	@GetMapping("/get")
	public List<SignUp> read(){
		return service.getsignup();
	}
	@DeleteMapping("/Signup/{id}")
	public String delete(@PathVariable int id) {
		return service.deletesignupById(id);
	}
	@PutMapping("/Signup")
	public String Update(SignUp Signup) {
		return service.Updatesignup(Signup);
	}
	
}