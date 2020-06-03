import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TaskService {

    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        this.tasksList = [
            { name: 'Sprzątanie', created: new Date().toLocaleString(), isDone: false },
            { name: 'Nauka', created: new Date().toLocaleString(), isDone: false },
            { name: 'Zmywanie', created: new Date().toLocaleString(), isDone: false },
            { name: 'Zakupy', created: new Date().toLocaleString(), isDone: false }
        ];
        this.tasksListObs.next(this.tasksList);
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
    }

    done(task: Task) {
        this.tasksDone.push(task);
        this.remove(task);
        this.tasksDoneObs.next(this.tasksDone);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>> {
        return this.tasksDoneObs.asObservable();
    }
}