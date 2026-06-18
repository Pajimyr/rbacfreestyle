import { users } from "..";
import { Actions } from "../types";

export const checkPermissionsForAction = (
  id: number,
  action: keyof Actions,
): boolean => {
  if (!users[id]) return false;
  return users[id].role.permissions[action];
};
