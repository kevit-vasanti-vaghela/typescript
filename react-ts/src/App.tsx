import { useState } from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  } 

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
