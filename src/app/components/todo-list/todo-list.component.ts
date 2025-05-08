// src/app/components/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../shared/todo.interface';
import * as TodoSelectors from '../../store/selectors/todo.selectors';
import * as TodoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <input type="checkbox" [checked]="todo.completed" (change)="toggle(todo.id)" />
        {{ todo.title }}
        <button (click)="remove(todo.id)">X</button>
      </li>
    </ul>
  `
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(TodoSelectors.selectTodos);
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  toggle(id: number) {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  remove(id: number) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}
