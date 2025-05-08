// src/app/store/selectors/todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../shared/todo.interface';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectCompletedTodos = createSelector(
  selectTodos,
  todos => todos.filter(t => t.completed)
);
