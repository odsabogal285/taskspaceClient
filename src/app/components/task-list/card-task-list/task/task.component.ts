import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {TaskService} from '../../../../services/task.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  @Input() task: any;
  id: number = 0;
  name: string = '';
  status: boolean = false;
  data: any[] = [];

  constructor(private taskService: TaskService, private router: Router) {
  }
  ngOnInit(): void {
    this.name = this.task.name;
    this.id = this.task.id;
    this.status = this.task.finished;
  }

  public update(id: number, status: boolean): void {
    this.data = [
      {'finished': !status}
    ];
    this.taskService.update(id, this.data).subscribe( data => {
      this.status = data.data.finished;
    });
  }

  public edit (id: number): void {
    console.log(id);
  }
}
