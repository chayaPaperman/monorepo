import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent {
  tasks = {
    todo: ['Task 1', 'Task 2', 'Task 3'],
    inProgress: ['Task 4', 'Task 5'],
    done: ['Task 6','Task 7']
  };

  addTask(column: keyof typeof this.tasks, task: string): void {
    if (task && this.tasks[column]) {
      this.tasks[column].push(task);
    } else {
      console.error('Invalid column or empty task');
    }
  }
}
