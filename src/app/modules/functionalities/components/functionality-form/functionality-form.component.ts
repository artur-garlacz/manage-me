import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionalityService } from 'src/app/modules/functionalities/functionalities.service';
import { FunctionalityForm } from 'src/app/modules/functionalities/models/functionality-form.model';
import { FunctionalityStatus } from 'src/app/modules/functionalities/models/functionality.model';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';
import { UserModel } from 'src/app/modules/users/models/user.model';
import { UserService } from 'src/app/modules/users/users.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './functionality-form.component.html',
})
export class FunctionalityFormComponent implements OnInit {
  form!: FormGroup<FunctionalityForm>;
  projectId?: string;
  users: UserModel[] = [];
  priorityOptions = ['High', 'Medium', 'Low'];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private functionalityService: FunctionalityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];

    this.getUsers();

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['High', [Validators.required]],
      userId: [''],
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    const { description, name, priority, userId } = this.form.value;

    if (description && name && priority && userId && this.projectId) {
      this.functionalityService
        .addFunctionality({
          description,
          name,
          priority,
          projectId: this.projectId,
          status: FunctionalityStatus.TODO,
          userId,
        })
        .then(() => {
          this.router.navigateByUrl(`/projects/details/${this.projectId}`);
        });
    }
  }
}
