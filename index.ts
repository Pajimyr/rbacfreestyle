import { input } from "@inquirer/prompts";
import { createUser } from "./Services/createUser.js";

const initTerminalPrompt = async () => {
  try {
    const userName = await input({ message: "Zadej svůj username." });
    const pass = await input({ message: "Vytvoř si heslo." });
    await createUser(userName, pass);
    console.log(`Ahoj, ${userName}`);
  } catch (err) {
    console.error("Něco se nepovedlo:", err);
  }
};

initTerminalPrompt();
