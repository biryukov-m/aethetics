import React, { useState } from 'react';
import contactsService from '../../../services/contacts.service';
import { ContactsFilled } from './ContactsFilled';
import { ContactsForm } from './ContactsForm';

export const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState(contactsService.contacts);
  const [isUpdating, setIsUpdating] = useState(false);

  return contacts && contacts.name.length > 0 ? (
    isUpdating ? (
      <ContactsForm
        setContacts={setContacts}
        isUpdating={isUpdating}
        setIsUpdating={setIsUpdating}
        initialValues={contacts}
      />
    ) : (
      <ContactsFilled contacts={contacts} setIsUpdating={setIsUpdating} />
    )
  ) : (
    <ContactsForm setContacts={setContacts} isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
  );
};
