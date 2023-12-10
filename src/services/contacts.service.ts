import STORAGE_KEYS from '../constants/storageKeys';

interface IContact {
  name: string;
  surname: string;
  tel: string;
  email: string;
  dob?: string;
}

class ContactsService {
  get contacts() {
    const contacts = sessionStorage.getItem(STORAGE_KEYS.contacts);
    return contacts ? JSON.parse(contacts) : { name: '', surname: '', tel: '', email: '', dob: '' };
  }

  set contacts(contacts: IContact) {
    const contactsString = JSON.stringify(contacts);
    sessionStorage.setItem(STORAGE_KEYS.contacts, contactsString);
  }

  update(updateInfo: IContact) {
    const { contacts } = this;
    const newContact = { ...contacts, ...updateInfo };
    this.contacts = newContact;
  }

  remove() {
    this.contacts = { name: '', surname: '', tel: '', email: '', dob: '' };
  }
}
const contactsService = new ContactsService();

export default contactsService;
