import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/modules/tasks/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task?: TaskModel;
}
