import { getUserByUsername } from "../Queries/getUserByUsername.js";

export const checkPermissionsForAction = async (
  username:string
): Promise<boolean> => {
  
  const checkedUser = await getUserByUsername(username);
  if (!checkedUser) return false;

  const roles = checkedUser.roles as unknown as { role: string };
  return roles.role === "admin";
};
