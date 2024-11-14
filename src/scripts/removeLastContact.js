import readContacts from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js"

export const removeLastContact = async () => {

    const data = await readContacts();
    // console.log("data-2: ", data);
    const newData = data.slice(0, -1);
    // console.log("data-3: ",newData);
    writeContacts(newData);

 };

removeLastContact();
