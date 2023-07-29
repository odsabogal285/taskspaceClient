import {Component, OnInit} from '@angular/core';
import {TaskListService} from '../../services/task-list.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private taskListService: TaskListService) {
    //this.index();
  }

  taskLists: any[] = [];
  loading: boolean = true;
  ngOnInit(): void
  {
    this.index();
  }
  index() {
    this.taskListService.index(null).subscribe(data => {
      // Todo Se debe validar si la respuesta es un error que poner
      this.taskLists = data.data;
      this.loading = false;
    });
  }
}
