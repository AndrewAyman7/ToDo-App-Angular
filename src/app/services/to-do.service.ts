import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ToDo} from '../dto/ToDo.dto';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private api_url = 'http://localhost:3000/todos';

  constructor(private httpClient:HttpClient) {  }

  getAllTodos():Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.api_url);
  }
  
  getToDoById(id:string):Observable<ToDo>{
    return this.httpClient.get<ToDo>(`${this.api_url}/${id}`);
  }

  addTodo(todo:ToDo):Observable<ToDo>{
    return this.httpClient.post<ToDo>(this.api_url , JSON.stringify(todo));
  }

  removeToDo(id:string):Observable<void>{
    return this.httpClient.delete<void>(`${this.api_url}/${id}`);
  }

  updateTodoStatus(todo: ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(`${this.api_url}/${todo.id}`, todo);
  }

  updateTodo(todo: ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(`${this.api_url}/${todo.id}`, todo);
  }
}
