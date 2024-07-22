import { JsonValue } from "type-fest";
import { Sale } from "../sale/Sale";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  telegramId: number | null;
  sales?: Array<Sale>;
};
