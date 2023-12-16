import React, { useEffect, useState } from 'react';
import { To, useNavigate } from 'react-router-dom';
import contactsService from '../../../services/contacts.service';
import { ContactsFilled } from './ContactsFilled';
import { ContactsForm } from './ContactsForm';

interface IProps {
  logout?: boolean;
  redirect?: To;
}

export const Contacts: React.FC<IProps> = ({ logout, redirect }) => {
  const [contacts, setContacts] = useState(contactsService.contacts);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setContacts(contactsService.contacts);
  }, [isUpdating]);

  const handleOnSubmit = () => {
    if (redirect) {
      navigate(redirect);
    } else if (isUpdating) {
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
        handleOnSubmit={handleOnSubmit}
        initialValues={contacts}
        logout={logout}
      />
    );
  }

  return <ContactsFilled contacts={contacts} handleContactsUpdate={turnOnContactsUpdate} />;
};
