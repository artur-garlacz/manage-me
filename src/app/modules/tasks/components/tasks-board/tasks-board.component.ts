import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from 'src/app/modules/tasks/task.model';
import { TaskService } from 'src/app/modules/tasks/tasks.service';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss'],
})
export class TasksBoardComponent implements OnInit {
  tasks: TaskModel[] = [];
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const functionalityId = this.route.snapshot.params['functionalityId'];
    this.taskService
      .getTasksByFuncitonalityId(functionalityId)
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }
}
