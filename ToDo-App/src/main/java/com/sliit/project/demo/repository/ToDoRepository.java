package com.sliit.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sliit.project.demo.model.ToDoList;

@Repository
public interface ToDoRepository extends JpaRepository<ToDoList, Long> {

}
