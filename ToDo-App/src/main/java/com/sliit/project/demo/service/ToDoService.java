package com.sliit.project.demo.service;

import java.util.List;

import com.sliit.project.demo.model.ToDoList;

public interface ToDoService {

	void addList(ToDoList toDoList);

	void removeList(Long id);

	void updateList(Long id, ToDoList toDoList);

	ToDoList getListById(Long id);

	List<ToDoList> getAllList();
}
