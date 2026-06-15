import { checkPermissionsForAction } from "./checkRole";
import { input } from "@inquirer/prompts";
import { User } from "./types";
import { createUser } from "./createUser";

export const users: User[] = [];

const randomId = Math.floor(Math.random() * users.length);
const selectedUser = users[randomId];

const terminalPrompt = async () => {
  try {
    const userName = await input({ message: "Zadej svůj username." });
    console.log(`Ahoj, ${userName}`);
    const pass = await input({ message: "Vytvoř si heslo." });
    createUser(userName, pass, users);
    console.log(users);
  } catch (err) {
    console.error("Něco se nepovedlo:", err);
  }
};

terminalPrompt();
