import { Injectable } from '@angular/core';
import {
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  doc,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskModel } from 'src/app/modules/tasks/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private fireStore: Firestore) {}

  addTask(task: Omit<TaskModel, 'id'>) {
    return addDoc(collection(this.fireStore, 'tasks'), task);
  }

  deleteTask(task: TaskModel) {
    let docRef = doc(this.fireStore, `tasks/${task.id}`);

    return deleteDoc(docRef);
  }

  updateTask(task: TaskModel) {
    let docRef = doc(this.fireStore, `tasks/${task.id}`);

    return updateDoc(docRef, task);
  }

  getTasks(): Observable<TaskModel[]> {
    let tasksRef = collection(this.fireStore, 'tasks');
    const projects = collectionData(tasksRef, { idField: 'id' }) as Observable<
      TaskModel[]
    >;

    return projects;
  }

  getTasksByFuncitonalityId(id: string): Observable<TaskModel[]> {
    const usersRef = collection(this.fireStore, 'tasks');
    const queryRef = query(usersRef, where('functionalityId', '==', id));

    return collectionData<any>(queryRef, { idField: 'id' }).pipe(
      map((tasks: TaskModel[]) => tasks)
    );
  }
}
