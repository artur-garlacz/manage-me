import { Injectable } from '@angular/core';
import { collection } from '@firebase/firestore';
import {
  Firestore,
  query,
  where,
  updateDoc,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/modules/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireStore: Firestore) {}

  addUser(user: Omit<UserModel, 'id'>) {
    return addDoc(collection(this.fireStore, 'users'), user);
  }

  deleteUser(user: UserModel) {
    let docRef = doc(this.fireStore, `users/${user.id}`);

    return deleteDoc(docRef);
  }

  updateUser(user: UserModel) {
    let docRef = doc(this.fireStore, `users/${user.id}`);

    return updateDoc(docRef, user);
  }

  getUsers(): Observable<UserModel[]> {
    let projectsRef = collection(this.fireStore, 'users');
    const users = collectionData(projectsRef, { idField: 'id' }) as Observable<
      UserModel[]
    >;

    return users;
  }

  findUserByCredentials(
    userName: string,
    password: string
  ): Observable<UserModel[]> {
    const usersRef = collection(this.fireStore, 'users');
    const queryRef = query(
      usersRef,
      where('userName', '==', userName),
      where('password', '==', password)
    );

    return collectionData<any>(queryRef, { idField: 'id' }).pipe(
      map((users: UserModel[]) => {
        if (users.length > 0) {
          return [users[0]];
        } else {
          return [];
        }
      })
    );
  }

  getUserById(id: string): Observable<UserModel[]> {
    const usersRef = collection(this.fireStore, 'users');
    const queryRef = query(usersRef, where('id', '==', id));

    return collectionData<any>(queryRef, { idField: 'id' }).pipe(
      map((users: UserModel[]) => {
        if (users.length > 0) {
          return [users[0]];
        } else {
          return [];
        }
      })
    );
  }
}
