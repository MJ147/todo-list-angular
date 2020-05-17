import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  taskList: Array<string> = [];
    
  add(){
    this.taskList.push(this.newTask);
    this.newTask = "";
    console.log(this.taskList)
  }

}
