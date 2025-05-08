// src/app/store/reducers/todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../../shared/todo.interface';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccess, (state, { todos }) => [...todos]),
  on(TodoActions.addTodo, (state, { todo }) => [...state, todo]),
  on(TodoActions.toggleTodo, (state, { id }) =>
    state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  ),
  on(TodoActions.removeTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);
