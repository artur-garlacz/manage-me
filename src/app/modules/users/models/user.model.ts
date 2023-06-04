export enum UserRole {
  DEV = 'DEV',
  DO = 'DO',
  ADMIN = 'ADMIN',
}

export type UserModel = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  role: UserRole;
};
