import { permissionsAdmin, permissionsUser } from "./permissions";
import { Roles } from "./types";

export const roles: Roles = {
  admin: { permissions: permissionsAdmin },
  user: { permissions: permissionsUser },
};
