import { supabase } from "./supabaseClient.js";

export const deleteUser = async (id: number) => {
  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error("Chyba při mazání uživatele:", error.message);
    return null;
  }

  return `Uživatel ${id} smazán.`;
};
