import createFakeContact from "../utils/createFakeContact.js"
import readContacts from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js"

export const addOneContact = async () => { };

        const data = createFakeContact()
        console.log("Generated contact:", data);
        const contacts = await readContacts()
        await writeContacts([...contacts, data])

addOneContact();
