// src/app/store/actions/todo.actions.ts
import { createAction, props } from '@ngrx/store';
import { Todo } from '../../shared/todo.interface';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ id: number }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
