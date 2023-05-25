import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: [],
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectModel[] = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
