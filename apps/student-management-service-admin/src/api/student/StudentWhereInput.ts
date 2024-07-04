import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  marks?: IntNullableFilter;
  name?: StringNullableFilter;
  subject?: StringNullableFilter;
};
