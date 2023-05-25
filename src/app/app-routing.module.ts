import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from 'src/app/modules/projects/components/projects-list/projects-list.component';
import { NotFoundComponent } from 'src/app/modules/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
