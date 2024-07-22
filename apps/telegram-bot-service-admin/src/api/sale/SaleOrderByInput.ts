import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  clientTelegramId?: SortOrder;
  userId?: SortOrder;
};
