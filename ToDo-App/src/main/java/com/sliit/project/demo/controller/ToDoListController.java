package com.sliit.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.project.demo.model.ToDoList;
import com.sliit.project.demo.service.ToDoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/to-do-list/")
public class ToDoListController {

	@Autowired
	ToDoService toDoService;

	@PostMapping("/save")
	public void save(@RequestBody ToDoList toDoList) {
		toDoService.addList(toDoList);
	}

	@PutMapping("/update/{id}")
	public void Update(@PathVariable Long id, @RequestBody ToDoList toDoList) {
		toDoService.updateList(id, toDoList);
	}

	@GetMapping("/lists")
	public List<ToDoList> getAllList() {
		return toDoService.getAllList();

	}

	@GetMapping("/list/{id}")
	public ToDoList getListById(@PathVariable Long id) {
		return toDoService.getListById(id);

	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Long id) {
		 toDoService.removeList(id);

	}

}
