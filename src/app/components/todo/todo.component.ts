// src/app/components/add-todo/add-todo.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.actions';
import { Todo } from '../../shared/todo.interface';

@Component({
  selector: 'app-add-todo',
  template: `
    <input [(ngModel)]="title" placeholder="New Todo" />
    <button (click)="add()">Add</button>
  `
})
export class AddTodoComponent {
  title = '';

  constructor(private store: Store) {}

  add() {
    const todo: Todo = { id: Date.now(), title: this.title, completed: false };
    this.store.dispatch(TodoActions.addTodo({ todo }));
    this.title = '';
  }
}
