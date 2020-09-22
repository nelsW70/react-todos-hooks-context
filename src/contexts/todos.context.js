import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer.js';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'mow the lawn', completed: false },
  { id: 2, task: 'feed dogs', completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
