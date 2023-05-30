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
import { FunctionalityModel } from 'src/app/modules/functionalities/models/functionality.model';
import { ProjectModel } from 'src/app/modules/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class FunctionalityService {
  constructor(private fireStore: Firestore) {}

  getFunctionalities(projectId: string): Observable<FunctionalityModel[]> {
    let functionalitiesRef = collection(
      this.fireStore,
      `projects/${projectId}/functionalities`
    );
    const functionalities = collectionData(functionalitiesRef, {
      idField: 'id',
    }) as Observable<FunctionalityModel[]>;

    return functionalities;
  }

  addFunctionality(functionality: FunctionalityModel) {
    functionality.id = doc(collection(this.fireStore, 'key')).id;

    return addDoc(
      collection(
        this.fireStore,
        `projects/${functionality.projectId}/functionalities`
      ),
      functionality
    );
  }

  deleteFunctionality(functionality: FunctionalityModel) {
    let docRef = doc(this.fireStore, `functionalities/${functionality.id}`);

    return deleteDoc(docRef);
  }

  updateFunctionality(functionality: FunctionalityModel) {
    let docRef = doc(
      this.fireStore,
      `projects/${functionality.projectId}/functionalities/${functionality.id}`
    );

    return updateDoc(docRef, functionality);
  }
}
