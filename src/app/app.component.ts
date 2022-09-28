import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tasks: string[] = [];
  task = '';
  addTask(task: string): void {
    if (task) {
      this.tasks.push(task);
      this.task = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
