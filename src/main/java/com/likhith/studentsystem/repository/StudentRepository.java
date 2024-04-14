package com.likhith.studentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.likhith.studentsystem.model.Student;

@Repository

public interface StudentRepository extends JpaRepository <Student,Integer>{

}
