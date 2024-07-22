import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SaleCreateInput = {
  date?: Date | null;
  clientTelegramId?: number | null;
  user?: UserWhereUniqueInput | null;
};
