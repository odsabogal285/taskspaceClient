import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-task-list',
  templateUrl: './card-task-list.component.html',
  styleUrls: ['./card-task-list.component.css']
})
export class CardTaskListComponent implements OnInit{
    @Input() taskList: any;
    name: string = '';
    tasks: any[] = [];

    constructor() {
    }
    ngOnInit() {
      this.name = this.taskList.name;
      this.tasks = this.taskList.tasks;
    }
}
