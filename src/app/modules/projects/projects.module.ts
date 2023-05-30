import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ProjectsListComponent } from 'src/app/modules/projects/components/projects-list/projects-list.component';
import { ProjectItemComponent } from 'src/app/modules/projects/components/project-item/project-item.component';
import { ProjectsLayoutComponent } from 'src/app/modules/projects/components/projects-layout/projects-layout.component';
import { ProjectFormComponent } from 'src/app/modules/projects/components/project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailComponent } from 'src/app/modules/projects/components/project-details/project-details.component';
import { FunctionalitiesListComponent } from 'src/app/modules/functionalities/components/functionalities-list/functionalities-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsLayoutComponent,
    children: [{ path: '', component: ProjectsListComponent }],
  },
  { path: 'create', component: ProjectFormComponent },
  { path: 'details/:id', component: ProjectDetailComponent },
];

@NgModule({
  declarations: [
    ProjectsLayoutComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
    FunctionalitiesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ProjectsModule {}
