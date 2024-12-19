import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ToDoService} from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../dto/ToDo.dto';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  todo: ToDo | undefined;
  constructor(private route:ActivatedRoute , private router:Router , private todoService:ToDoService){}

  ngOnInit(): void {
    this.getToDo();
  }

  getToDo(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.todoService.getToDoById(id).subscribe(todo=>{
      this.todo = todo;
      console.log(this.todo)
    })
  }


}
