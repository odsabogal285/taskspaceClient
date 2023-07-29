import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  baseUrl: string = 'http://127.0.0.1:8000/api/v1/'

  constructor(private http:HttpClient) { }

  index(data:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('token')
      })
    };
    return this.http.get<string>(this.baseUrl + 'task-list', httpOptions);
  }
}
