import bcrypt from "bcrypt";

export const hashPass = async (userPassInput: string) => {
  const hash = await bcrypt.hash(userPassInput, 12);
  return hash;
};
