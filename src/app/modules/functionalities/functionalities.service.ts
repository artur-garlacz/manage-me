import { Injectable } from '@angular/core';
import {
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { collection, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FunctionalityModel } from 'src/app/modules/functionalities/models/functionality.model';

@Injectable({
  providedIn: 'root',
})
export class FunctionalityService {
  constructor(private fireStore: Firestore) {}

  getFunctionality({
    projectId,
    functionalityId,
  }: {
    projectId: string;
    functionalityId: string;
  }): Observable<FunctionalityModel | undefined> {
    let functionalitiesRef = collection(
      this.fireStore,
      `projects/${projectId}/functionalities`
    );
    const functionalityDocRef = doc(functionalitiesRef, functionalityId);
    const functionality = new Observable<FunctionalityModel | undefined>(
      (observer) => {
        getDoc(functionalityDocRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              observer.next(docSnapshot.data() as FunctionalityModel);
            } else {
              observer.next(undefined);
            }
            observer.complete();
          })
          .catch((error) => observer.error(error));
      }
    );
    return functionality;
  }

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

  addFunctionality(functionality: Omit<FunctionalityModel, 'id'>) {
    return addDoc(
      collection(
        this.fireStore,
        `projects/${functionality.projectId}/functionalities`
      ),
      functionality
    );
  }

  deleteFunctionality(functionality: { projectId: string; id: string }) {
    let docRef = doc(
      this.fireStore,
      `projects/${functionality.projectId}/functionalities/${functionality.id}`
    );

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
