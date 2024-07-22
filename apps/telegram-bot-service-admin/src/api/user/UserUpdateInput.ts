import { InputJsonValue } from "../../types";
import { SaleUpdateManyWithoutUsersInput } from "./SaleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramId?: number | null;
  sales?: SaleUpdateManyWithoutUsersInput;
};
