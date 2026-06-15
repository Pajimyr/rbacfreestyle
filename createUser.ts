import { hashPass } from "./hashPass";
import { roles } from "./roles";
import { User } from "./types";

export const createUser = async (
  userName: string,
  pass: string,
  arr: User[],
) => {
  const hashedPass = await hashPass(pass);

  console.log(hashedPass);

  arr.push({
    id: Math.random(),
    pass: hashedPass,
    userName: userName,
    role: roles.user,
  });

  console.log(arr);
};
