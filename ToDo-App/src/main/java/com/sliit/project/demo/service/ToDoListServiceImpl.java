package com.sliit.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.project.demo.model.ToDoList;
import com.sliit.project.demo.repository.ToDoRepository;

@Service
public class ToDoListServiceImpl implements ToDoService {

	@Autowired
	ToDoRepository toDoRepository;

	@Override
	public void addList(ToDoList toDoList) {
		toDoRepository.save(toDoList);
	}

	@Override
	public void removeList(Long id) {
		toDoRepository.deleteById(id);
	}

	@Override
	public void updateList(Long id, ToDoList toDoList) {
		ToDoList doList = toDoRepository.findById(id).get();
		doList.setToDoList(toDoList.getToDoList());
		toDoRepository.save(doList);
	}

	@Override
	public ToDoList getListById(Long id) {
		return toDoRepository.findById(id).get();
	}

	@Override
	public List<ToDoList> getAllList() {
		return toDoRepository.findAll();
	}

}
