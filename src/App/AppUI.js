import React from 'react';
import "./App.css";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  const listItems = searchedTodos.map((todo) => (
    <TodoItem 
      key={todo.id} 
      text={todo.text} 
      completed={todo.completed} 
      onComplete={() => completeTodo(todo.text)} 
      onDelete={() => deleteTodo(todo.text)} 
    />
  ));

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {listItems}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}
export { AppUI };
