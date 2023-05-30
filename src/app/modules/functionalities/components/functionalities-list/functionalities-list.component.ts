import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityService } from 'src/app/modules/functionalities/functionalities.service';
import { FunctionalityModel } from 'src/app/modules/functionalities/models/functionality.model';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';
import { ProjectService } from 'src/app/modules/projects/projects.service';

@Component({
  selector: 'app-functionalities-list',
  templateUrl: './functionalities-list.component.html',
  styleUrls: ['./functionalities-list.component.scss'],
})
export class FunctionalitiesListComponent implements OnInit {
  functionalities: FunctionalityModel[] = [];
  projectId!: string;

  constructor(
    private functionalityService: FunctionalityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];

    this.functionalityService
      .getFunctionalities(this.projectId)
      .subscribe((functionalities) => {
        this.functionalities = functionalities;
        console.log(functionalities);
      });
  }
}
