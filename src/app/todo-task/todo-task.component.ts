import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    })
  }

  ngOnInit(): void {
  }

  remove(task: string) {
    this.taskService.remove(task);
  }

  done(task: string) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green'
  }

}
