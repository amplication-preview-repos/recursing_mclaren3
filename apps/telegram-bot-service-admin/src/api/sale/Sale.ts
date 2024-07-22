import { User } from "../user/User";

export type Sale = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  clientTelegramId: number | null;
  user?: User | null;
};
