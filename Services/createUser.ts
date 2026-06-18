import { hashPass } from "../tools/hashPass";
import { User } from "../types";

export const createUser = async (
  userName: string,
  pass: string,
  arr: User[],
) => {
  const hashedPass = await hashPass(pass);

  arr.push({
    id: Math.random(),
    pass: hashedPass,
    userName: userName,
    role: roles.user,
  });

  console.log(arr);
};
