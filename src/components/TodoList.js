import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // function to add something to the list
  const addTodo = (todo) => {
    // this line of code is not necessarily understandable, but used to disconsider a large amount of SPACES in the form
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // this is adding the to dos in the list of to dos and storing the information
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // function to remove something from the list
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // function to click on the todo and it is considered complete
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //function to update todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>Get ready for the day!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
  );
}

export default TodoList;
