import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: '' , redirectTo: '/todos' , pathMatch: 'full' },
    { path: 'todos', component:TodoComponent , title: 'todos' },
    { path: 'todos/:id' , component: TodoDetailsComponent , title: 'todo details' },
    { path: '**' , component: NotfoundComponent , title: 'Not Found' }
];
