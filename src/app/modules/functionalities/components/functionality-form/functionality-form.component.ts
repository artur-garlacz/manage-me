import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './fuctionality-form.component.html',
})
export class FunctionalityFormComponent implements OnInit {
  projectForm!: FormGroup<ProjectForm>;
  projectId?: string;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];

    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    const project = this.projectForm.value as ProjectModel;
    console.log(project);
  }
}
