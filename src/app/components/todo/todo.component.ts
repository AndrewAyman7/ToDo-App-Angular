import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDoService } from '../../services/to-do.service';
import { ToDo } from '../../dto/ToDo.dto';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ToDosHeaderComponent } from '../to-dos-header/to-dos-header.component';
import { AddToDoFormComponent } from '../add-to-do-form/add-to-do-form.component';
import { ViewToDosComponent } from '../view-to-dos/view-to-dos.component';
import { UpdateToDoComponent } from '../update-to-do/update-to-do.component';



 
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    TableModule,
    CheckboxModule,
    ToDosHeaderComponent,
    AddToDoFormComponent,
    ViewToDosComponent,
    UpdateToDoComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  title: string = 'ToDo App';

  todos: ToDo[] = [];
  newToDo:ToDo = {} as ToDo;

  selectedTodo: ToDo | null = null;  
  
  constructor(private todoService:ToDoService){

  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getAllTodos().subscribe(
      (res) => {
        this.todos = res; 
      },
      (error) => {
        console.error('Error fetching todos:', error); 
      }
    );
  } 

  createToDo(newToDo: { id: string; title: string; description: string }):void{
    const newTodo = {id: this.newToDo.id, title: this.newToDo.title, description: this.newToDo.description , completed:false};
    this.newToDo = newTodo;

    this.todoService.addTodo(newTodo).subscribe(todo=>{
      this.todos.push(todo);
    })
  }

  deleteTodo(id:string):void{
    this.todoService.removeToDo(id).subscribe(()=>{
      this.todos = this.todos.filter(todo=> todo.id !== id);
    })
  }

  todoStatus(item: ToDo): void {
    this.todoService.updateTodoStatus(item).subscribe(updatedTodo => {
      const index = this.todos.findIndex(todo => todo.id === item.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo; 
      }
    });
  }

  editTodo(todo: ToDo): void {
    this.selectedTodo = { ...todo }; 
  }

  cancelEdit(): void {
    this.selectedTodo = null;
  }

  updateTodo(updatedTodo: ToDo): void {
    this.todoService.updateTodo(updatedTodo).subscribe(
      (todo) => {
        const index = this.todos.findIndex(t => t.id === todo.id);
        if (index !== -1) {
          this.todos[index] = todo; 
        }
        
        this.selectedTodo = null;
      }
    );
  }
}
