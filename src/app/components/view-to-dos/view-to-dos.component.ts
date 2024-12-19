import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ToDo } from '../../dto/ToDo.dto';


@Component({
  selector: 'app-view-to-dos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    TableModule,
    CheckboxModule
  ],
  templateUrl: './view-to-dos.component.html',
  styleUrls: ['./view-to-dos.component.css' , '../todo/todo.component.css']
})
export class ViewToDosComponent implements OnChanges {
  @Input() todos: any[] = [];
  @Output() todoStatus = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();

  filteredTodos: ToDo[] = [];

  ngOnChanges(): void {
    this.filteredTodos = this.todos;
  }



  filterTodos(status: string): void {
    if (status === 'all') {
      this.filteredTodos = [...this.todos];
    } else if (status === 'pending') {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    } else if (status === 'completed') {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    }
  }

}