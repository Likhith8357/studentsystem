package com.likhith.studentsystem.service;

import java.util.List;

import com.likhith.studentsystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
