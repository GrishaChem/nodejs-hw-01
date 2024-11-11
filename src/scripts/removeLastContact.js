import readContacts from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js"

export const removeLastContact = async () => {

    const data = await readContacts();
    const newData = data.slice(0, -1);
    writeContacts(newData);

 };

removeLastContact();
