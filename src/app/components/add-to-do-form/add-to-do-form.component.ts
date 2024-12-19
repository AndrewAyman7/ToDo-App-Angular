import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToDo } from '../../dto/ToDo.dto';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-to-do-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,

  ],
  templateUrl: './add-to-do-form.component.html',
  styleUrl: './add-to-do-form.component.css',
})

export class AddToDoFormComponent {
  @Input() newToDo: ToDo | any = {};
  @Output() addTask = new EventEmitter();

  constructor(private snackBar: MatSnackBar) {}

  createToDo(): void {

    if (!this.newToDo.title && !this.newToDo.description) {
      this.snackBar.open('You Should enter the values', 'Close', {
        duration: 3000,
      });
      console.log('Error snackbar opened'); 
      return;
    }

    if (!this.newToDo.title || this.newToDo.title.length < 1 || this.newToDo.title.length > 50) {
      this.snackBar.open('Title must be between 1 and 50 characters.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      console.log('Error snackbar opened'); 
      return;
    }
  
    if (!this.newToDo.description || this.newToDo.description.length < 5 || this.newToDo.description.length > 250) {
      this.snackBar.open('Description must be between 5 and 250 characters.', 'Close', {
        duration: 3000,
      });
      console.log('Error snackbar opened'); 
      return;
    }
  
    this.addTask.emit(this.newToDo);
    this.snackBar.open('Task added successfully!', 'Close', {
      duration: 3000,
    });
  }
}
