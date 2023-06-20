import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  // @Input() task: Task = {
  //   text: "",
  //   day: "",
  //   reminder: false,
  // };
  @Input() task:any;
  faTimes = faTimes;

  @Output() deleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
