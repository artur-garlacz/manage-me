import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent {
  @Input() project: ProjectModel = {
    id: '',
    name: '',
    description: '',
  };
}
