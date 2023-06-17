import { Injectable } from '@angular/core';
// import { ProjectModel } from '../models/project.model';
import {
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { CollectionReference, collection } from 'firebase/firestore';
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

  deleteProject(projectId: ProjectModel['id']) {
    let docRef = doc(this.fireStore, `projects/${projectId}`);

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

  getProject(
    projectId: ProjectModel['id']
  ): Observable<ProjectModel | undefined> {
    const projectRef = collection(this.fireStore, 'projects');
    const projectDocRef = doc(projectRef, projectId);
    const projects = new Observable<ProjectModel | undefined>((observer) => {
      getDoc(projectDocRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            observer.next(docSnapshot.data() as ProjectModel);
          } else {
            observer.next(undefined);
          }
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
    return projects;
  }
}
