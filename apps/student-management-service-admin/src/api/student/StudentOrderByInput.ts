import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  marks?: SortOrder;
  name?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
