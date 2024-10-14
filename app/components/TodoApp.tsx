"use client";
import React from "react";
import BaseComponent from "./BaseComponent";

// Define the state structure for the TodoApp
interface TodoAppState {
  todos: string[];
  inputValue: string;
  editingIndex: number | null;
  editInputValue: string;
}

export default class TodoApp extends BaseComponent<{}, TodoAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [], // List of todos
      inputValue: "", // New todo input
      editingIndex: null, // Index of the todo being edited
      editInputValue: "", // Input for the editing mode
    };
  }

  // Method to add a new todo
  addTodo = (): void => {
    const { todos, inputValue } = this.state;
    if (inputValue.trim()) {
      this.setState({
        todos: [...todos, inputValue],
        inputValue: "", // Clear input field after adding
      });
    }
  };

  // Method to start editing a todo
  startEditTodo = (index: number): void => {
    this.setState({
      editingIndex: index,
      editInputValue: this.state.todos[index], // Prepopulate the input with current todo
    });
  };

  // Method to handle saving an edited todo
  saveEditTodo = (index: number): void => {
    const { todos, editInputValue } = this.state;
    if (editInputValue.trim()) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editInputValue;
      this.setState({
        todos: updatedTodos,
        editingIndex: null, // Exit editing mode
        editInputValue: "", // Clear the input field
      });
    }
  };

  // Method to cancel editing
  cancelEdit = (): void => {
    this.setState({
      editingIndex: null,
      editInputValue: "", // Reset the edit input
    });
  };

  // Method to delete a todo
  removeTodo = (index: number): void => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render(): React.ReactNode {
    const { todos, inputValue, editingIndex, editInputValue } = this.state;

    return (
      <div className="todo-app max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        {/* Input for adding new todos */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Enter a todo"
            className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
          />
          <button
            onClick={this.addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <ul className="list-disc pl-5">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded-md"
            >
              {editingIndex === index ? (
                // Edit mode for the selected todo
                <>
                  <input
                    type="text"
                    name="editInputValue"
                    value={editInputValue}
                    onChange={this.handleChange}
                    className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
                  />
                  <button
                    onClick={() => this.saveEditTodo(index)}
                    className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={this.cancelEdit}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                // View mode for non-editing todos
                <>
                  <span className="flex-grow">{todo}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => this.startEditTodo(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.removeTodo(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
