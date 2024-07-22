import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SaleUpdateInput = {
  date?: Date | null;
  clientTelegramId?: number | null;
  user?: UserWhereUniqueInput | null;
};
