import { supabase } from "../Services/supabaseClient.js";

export const getUserByUsername = async (name: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, username, roles(role)")
    .eq("username", name)
    .single();

  if (error) {
    console.error("Chyba při načítání uživatele:", error.message);
    return null;
  }

  return data;
};
