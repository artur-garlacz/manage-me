import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionalityService } from 'src/app/modules/functionalities/functionalities.service';
import { FunctionalityForm } from 'src/app/modules/functionalities/models/functionality-form.model';
import {
  FunctionalityModel,
  FunctionalityStatus,
} from 'src/app/modules/functionalities/models/functionality.model';
import { UserModel } from 'src/app/modules/users/models/user.model';
import { UserService } from 'src/app/modules/users/users.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './functionality-form.component.html',
})
export class FunctionalityFormComponent implements OnInit {
  form!: FormGroup<FunctionalityForm>;
  projectId?: string;
  functionalityId?: string;
  functionality?: FunctionalityModel;
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
    this.functionalityId = this.route.snapshot.params['functionalityId'];

    this.getUsers();

    // if (this.functionalityId) {
    //   this.functionalityService
    //     .getFunctionality({
    //       projectId: this.projectId!,
    //       functionalityId: this.functionalityId,
    //     })
    //     .subscribe((fun) => {
    //       this.functionality = fun;
    //     });
    // }

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['High', [Validators.required]],
      userId: [''],
    });

    if (this.functionalityId) {
      this.functionalityService
        .getFunctionality({
          projectId: this.projectId!,
          functionalityId: this.functionalityId,
        })
        .subscribe((fun) => {
          this.functionality = fun;
          this.updateFormWithFunctionality();
        });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  updateFormWithFunctionality() {
    if (this.functionality) {
      this.form.patchValue({
        name: this.functionality.name || '',
        description: this.functionality.description || '',
        priority: this.functionality.priority || 'High',
        userId: this.functionality.userId || '',
      });
    }
  }

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    const { description, name, priority, userId } = this.form.value;

    if (description && name && priority && userId && this.projectId) {
      if (this.functionality) {
        console.log(this.functionality);
        this.functionalityService
          .updateFunctionality({
            ...this.functionality,
            id: this.functionalityId!,
            description,
            name,
            priority,
            userId,
          })
          .then(() => {
            this.router.navigateByUrl(`/projects/details/${this.projectId}`);
          });
      } else {
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
}
