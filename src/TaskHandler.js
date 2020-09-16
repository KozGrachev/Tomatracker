/*
useState is needed to save the current list of things that need doing
useRef instead allows us to access the input box
uuid will help provide a unique id to todos

*/
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TaskHandler() {
  const [todos, setTodos] = useState([]) //{id: 1, name:'todo1', complete: false}
  const todoNameRef = useRef()

  /*
  This checks if something's stored and if it is, it loads it*/
  useEffect(() => {
    /*JSON.parse converts string to an array*/
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  /*
  Anytime anything in the array changes, it will call useeffect function*/
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    /*Find the id*/
    const todo = newTodos.find(todo => todo.id === id)
    /*toggle that todo*/
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    console.log("todoNameRef:", todoNameRef);
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      //will give us previous todos, and add one
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });

    todoNameRef.current.value = null; //clears box
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos);

  }

  return (
      <>
      <TodoList todos={todos} toggleTodo ={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClearTodos}>Clear</button>
    </>
  )
}
