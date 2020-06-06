import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TaskService {


    private tasksListObs = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        const tasksList = [
            { name: 'Sprzątanie', created: new Date().toLocaleString(), isDone: false },
            { name: 'Nauka', created: new Date().toLocaleString(), isDone: false },
            { name: 'Zmywanie', created: new Date().toLocaleString(), isDone: false },
            { name: 'Zakupy', created: new Date().toLocaleString(), isDone: false },
            { name: 'Odkurzanie', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true }
        ];
        this.tasksListObs.next(tasksList);
    }

    add(task: Task) {
        const list = this.tasksListObs.getValue();
        list.push(task);
        this.tasksListObs.next(list);
    }

    remove(task: Task) {
        const list = this.tasksListObs.getValue().filter(e => e !== task);
        this.tasksListObs.next(list);
    }

    done(task: Task) {
        task.end = new Date().toLocaleDateString();
        task.isDone = true;
        const list = this.tasksListObs.getValue();
        this.tasksListObs.next(list);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }
}
