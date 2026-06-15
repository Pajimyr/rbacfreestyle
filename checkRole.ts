import { Actions } from "./types";
import { users } from "./users";

export const checkPermissionsForAction = (id: number, action: keyof Actions): boolean => {
  if (!users[id]) return false;
  return users[id].role.permissions[action];
};
