import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  add() {
    this.taskService.add(this.newTask);
    this.newTask = '';
  }

}
