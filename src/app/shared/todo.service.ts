// src/app/services/todo.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from '../shared/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private mockTodos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Try NgRx', completed: false }
  ];

  getTodos() {
    return of(this.mockTodos).pipe(delay(500)); // simulate HTTP delay
  }
}
