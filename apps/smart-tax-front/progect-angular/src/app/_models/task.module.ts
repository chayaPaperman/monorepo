import { Client } from './client.module';
import { User } from './user.module';
export interface Task {
  client: Client;
  taskName: string;
  description: string;
  dueDate: Date;
  status: string;
  assignedTo: User;
}