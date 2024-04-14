package com.likhith.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.likhith.studentsystem.model.Student;
import com.likhith.studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
@Autowired
private StudentService studentService;
@PostMapping("/add")
public String add(@RequestBody Student student) {
	studentService.saveStudent(student);
	return "New student is added";
	}
	@GetMapping("/getAll")
	public List<Student> list(){
	    return studentService.getAllStudents();
	}
	}