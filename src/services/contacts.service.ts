import STORAGE_KEYS from '../constants/storageKeys';
import { IContacts } from '../types/contacts';

class ContactsService {
  get contacts() {
    const contacts = sessionStorage.getItem(STORAGE_KEYS.contacts);
    return contacts ? JSON.parse(contacts) : { name: '', surname: '', tel: '', email: '' };
  }

  set contacts(contacts: IContacts) {
    const contactsString = JSON.stringify(contacts);
    sessionStorage.setItem(STORAGE_KEYS.contacts, contactsString);
  }

  update(updateInfo: IContacts) {
    const { contacts } = this;
    const newContact = { ...contacts, ...updateInfo };
    this.contacts = newContact;
  }

  remove() {
    this.contacts = { name: '', surname: '', tel: '', email: '' };
  }
}
const contactsService = new ContactsService();

export default contactsService;
