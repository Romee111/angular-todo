// src/app/store/effects/todo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from '../actions/todo.actions';
import { mergeMap, map } from 'rxjs/operators';
import { TodoService } from '../../shared/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() => this.todoService.getTodos()
        .pipe(map(todos => TodoActions.loadTodosSuccess({ todos })))
      )
    )
  );
}
