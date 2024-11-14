import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises"

export const readContacts = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" })
    // console.log("data-1: ", data);
    if (data.length < 1)
        {return []}
    const contacts = JSON.parse(data);
    // console.log("data-1.1: ",contacts);
    return contacts;
};

export default (readContacts)