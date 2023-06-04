export type TaskModel = {
  id: string;
  name: string;
  description: string;
  priority: string;
  functionalityId: string;
  timeToDone: number;
  status: TaskStatus;
  createdAt: Date;
  finishedAt: Date | null;
  userId: string;
};

export enum TaskStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
