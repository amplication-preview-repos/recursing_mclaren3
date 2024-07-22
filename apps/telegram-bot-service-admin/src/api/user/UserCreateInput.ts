import { InputJsonValue } from "../../types";
import { SaleCreateNestedManyWithoutUsersInput } from "./SaleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramId?: number | null;
  sales?: SaleCreateNestedManyWithoutUsersInput;
};
