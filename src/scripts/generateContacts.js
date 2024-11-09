import createFakeContact from "../utils/createFakeContact.js"
import readContacts from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js"

const generateContacts = async (number) => {

    for (let i = 0; i < number; i++) {
        const data = createFakeContact()
        console.log("Generated contact:", data);
        const contacts = await readContacts()
        await writeContacts([...contacts, data])
    }

};

generateContacts(5).catch(err => console.error(err));

