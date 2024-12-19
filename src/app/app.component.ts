import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ToDosHeaderComponent } from './components/to-dos-header/to-dos-header.component';
import { AddToDoFormComponent } from './components/add-to-do-form/add-to-do-form.component';
import { ViewToDosComponent } from './components/view-to-dos/view-to-dos.component';
import { UpdateToDoComponent } from './components/update-to-do/update-to-do.component';
import { ToastModule } from 'primeng/toast';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, TodoDetailsComponent , ToDosHeaderComponent, AddToDoFormComponent, ViewToDosComponent, UpdateToDoComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';

  constructor(private snackBar: MatSnackBar) {}

  showMessage() {
    this.snackBar.open('Snackbar without animations!', 'Close', { duration: 3000 });
  }
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(NoopAnimationsModule)],
}).catch((err) => console.error(err));