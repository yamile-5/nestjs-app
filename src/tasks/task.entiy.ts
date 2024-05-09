//estado para las tareas
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROFRESS',
  DONDE = 'DONDE',
}

//datos que tendran
export class Tasks {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
