import { Component } from '@angular/core';
import { Task } from '../../Task';
// import {TASKS} from "../../mock-tasks";
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteThisTask(task: Task) {
    this.taskService.deleteTaskFromService(task).subscribe(() => {
      this.tasks = this.tasks.filter(curTask => curTask.id !== task.id)
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    })
  }
}
