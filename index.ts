import { input, select } from "@inquirer/prompts";
import { createUser } from "./Services/createUser.js";
import { deleteUser } from "./Services/deleteUser.js";

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

const optionTerminalPrompt = async () => {
  try {
    const decision = await select({
      message: "Co chceš dělat?",
      choices: [
        { name: "Vytvořit nového uživatele", value: "create" },
        { name: "Smazat stávajícího uživatele", value: "delete" },
      ],
    });

    if (decision == "delete") {
      const deletedUserId = Number(
        await input({ message: "Zadej ID mazaného učtu." }),
      );
      const odpoved = await deleteUser(deletedUserId);

      console.log(odpoved);
    } else if (decision == "create") {
      const userName = await input({ message: "Zadej svůj username." });
      const pass = await input({ message: "Vytvoř si heslo." });
      await createUser(userName, pass);
      console.log(`Uživatel vytvořen, ${userName}`);
    }
  } catch (err) {
    console.error("Bomboclat", err);
  }
};

await initTerminalPrompt();
await optionTerminalPrompt();
