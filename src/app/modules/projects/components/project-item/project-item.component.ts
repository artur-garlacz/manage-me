import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent {
  @Input() project: ProjectModel = {
    id: '',
    name: '',
    description: '',
  };

  constructor(private dialog: MatDialog) {}

  deleteProject(project: ProjectModel) {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Are you sure you wanna delete this project?',
        onConfirm: () => {},
      },
    });
  }
}
