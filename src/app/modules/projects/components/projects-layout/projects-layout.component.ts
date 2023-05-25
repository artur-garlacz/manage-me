import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectCreationModalComponent } from 'src/app/modules/projects/components/project-creation-modal/project-creation-modal.component';

@Component({
  selector: 'app-projects-layout',
  templateUrl: './projects-layout.component.html',
})
export class ProjectsLayoutComponent {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openProjectCreationForm() {
    this.dialog.open(ProjectCreationModalComponent, {
      width: '350px',
      data: 'Are you sure you wanna delete this Product?',
    });
  }
}
