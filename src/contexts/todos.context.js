//todos
//all methods to interact with todos
import React, { createContext } from 'react';

const defaultTodos = [
  { id: 1, task: 'mow the lawn', compelted: false },
  { id: 2, task: 'feed dogs', compelted: true }
];
export const TodosContext = createContext();
