export type FunctionalityModel = {
  id: string;
  name: string;
  description: string;
  priority: string;
  projectId: string;
  userId: string;
  status: string;
};

export enum FunctionalityStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
