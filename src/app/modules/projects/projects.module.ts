import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsListComponent } from 'src/app/modules/projects/components/projects-list/projects-list.component';
import { ProjectItemComponent } from 'src/app/modules/projects/components/project-item/project-item.component';
import { ProjectsLayoutComponent } from 'src/app/modules/projects/components/projects-layout/projects-layout.component';
import { ProjectCreationModalComponent } from 'src/app/modules/projects/components/project-creation-modal/project-creation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ProjectsLayoutComponent,
    children: [{ path: '', component: ProjectsListComponent }],
  },
];

@NgModule({
  declarations: [
    ProjectsLayoutComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectCreationModalComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatDialogModule],
})
export class ProjectsModule {}
