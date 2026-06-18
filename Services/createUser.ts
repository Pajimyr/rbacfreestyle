import { hashPass } from "../tools/hashPass.js";
import { supabase } from "./supabaseClient.js";

export const createUser = async (userName: string, pass: string) => {
  const hashedPass = await hashPass(pass);

  const { data, error } = await supabase
    .from("users")
    .insert({ username: userName, passwd: hashedPass, role_id: 2 })
    .select()
    .single();

  if (error) {
    console.error("Chyba při vytváření uživatele:", error.message);
    return null;
  }

  return `Uživatel úspěšně vytvořen: ` + data.username;
};
