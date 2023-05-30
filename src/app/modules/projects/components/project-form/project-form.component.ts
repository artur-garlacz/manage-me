import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectForm } from 'src/app/modules/projects/models/project-form.model';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
})
export class ProjectFormComponent implements OnInit {
  projectForm!: FormGroup<ProjectForm>;
  projectId?: string;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];

    // const data = await this.projectService.getProject(this.projectId!);
    // console.log(data);

    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit() {
    const project = this.projectForm.value as ProjectModel;
    console.log(project);
  }
}
