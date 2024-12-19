import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToDo } from '../../dto/ToDo.dto';

@Component({
  selector: 'app-update-to-do',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css' , '../todo/todo.component.css']
})
export class UpdateToDoComponent {
  @Input() selectedTodo:ToDo | null = null;
  @Output() saveEdit = new EventEmitter<ToDo>();
  @Output() cancel = new EventEmitter();

  saveEditAction(): void {
    if (this.selectedTodo) {
      this.saveEdit.emit(this.selectedTodo); 
    }
  }
}
