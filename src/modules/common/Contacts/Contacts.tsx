import React, { useEffect, useState } from 'react';
import contactsService from '../../../services/contacts.service';
import { ContactsFilled } from './ContactsFilled';
import { ContactsForm } from './ContactsForm';

export const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState(contactsService.contacts);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setContacts(contactsService.contacts);
  }, [isUpdating]);

  const handleOnSubmit = () => {
    if (isUpdating) {
      setIsUpdating(false);
    } else {
      setContacts(contactsService.contacts);
    }
  };

  const turnOnContactsUpdate = () => {
    setIsUpdating(true);
  };

  if (!contacts || contacts.name.length === 0 || isUpdating) {
    return (
      <ContactsForm
        isUpdating={isUpdating}
        handleContactsUpdate={handleOnSubmit}
        initialValues={contacts}
      />
    );
  }

  return <ContactsFilled contacts={contacts} handleContactsUpdate={turnOnContactsUpdate} />;
};
