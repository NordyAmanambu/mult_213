import './App.css';
import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import { Header } from './Header';
import { TodoList } from './TodoList';
import { MyAccordion } from './MyAccordion';
import reactLogo from './assets/react.svg';

function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);

  // todos is going to be an empty list []
  // If I want to change todos, I need to use the setTodos() callback function


  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    // Make new TODO model
    const newTodo = {
      name: titleField
    };

    // We need to make a new list, otherwise React will not update

    // Option 1: Make a new list, iterate over old values, push on new value
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push(newTodo);

    // Option 2: Use a splat / explode operator to make a new list with the new value
    const newTodos = [...todos, newTodo];

    // We call the React hook to update the application state
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="Welcome to My Website!" message="Thanks for visiting my site." />

      <main>
        <section>
          <form id="todo-form" action={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">Add</button>
          </form>
        </section>

        <TodoList todos={todos} />
        <section>
          <h3>Example Usage from the Material Component Library</h3>
          <MyAccordion />
        </section>
      </main>


      <footer>
        <p className="read-the-docs">
          Click on the Vite (the build tool) and React (the frontend framework) logos to learn more
        </p>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  )
}

export default App
