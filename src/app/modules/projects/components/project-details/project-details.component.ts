import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
})
export class ProjectDetailComponent {
  project: ProjectModel = {} as ProjectModel;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProject(projectId).subscribe((project) => {
      if (project) {
        this.project = project;
      } else {
        this.router.navigateByUrl('/projects');
      }
    });
  }

  deleteProject() {
    if (this.project) {
      this.projectService.deleteProject(this.project.id);
      this.router.navigateByUrl('/projects');
    }
  }
}
