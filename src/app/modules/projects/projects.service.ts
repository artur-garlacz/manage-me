import { Injectable } from '@angular/core';
// import { ProjectModel } from '../models/project.model';
import {
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private fireStore: Firestore) {}

  addProject(project: ProjectModel) {
    project.id = doc(collection(this.fireStore, 'id')).id;

    return addDoc(collection(this.fireStore, 'projects'), project);
  }

  deleteProject(project: ProjectModel) {
    let docRef = doc(this.fireStore, `projects/${project.id}`);

    return deleteDoc(docRef);
  }

  updateProject(project: ProjectModel) {
    let docRef = doc(this.fireStore, `projects/${project.id}`);

    return updateDoc(docRef, project);
  }

  getProjects(): Observable<ProjectModel[]> {
    let projectsRef = collection(this.fireStore, 'projects');
    const projects = collectionData(projectsRef, {
      idField: 'id',
    }) as Observable<ProjectModel[]>;

    return projects;
  }
}
