import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SaleWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  clientTelegramId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
