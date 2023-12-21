import React, { useEffect, useState } from 'react';
import { To, useNavigate } from 'react-router-dom';
import contactsService from '../../../../services/contacts.service';
import { ContactsFilled } from './ContactsFilled';
import { ContactsForm } from './ContactsForm';

interface IProps {
  logout?: boolean;
  redirect?: To;
}

export const Contacts: React.FC<IProps> = ({ logout, redirect }) => {
  const [contacts, setContacts] = useState(contactsService.contacts);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setContacts(contactsService.contacts);
  }, [isEditing]);

  const handleOnSubmit = () => {
    if (redirect) {
      navigate(redirect);
    } else if (isEditing) {
      setIsEditing(false);
    } else {
      setContacts(contactsService.contacts);
    }
  };

  const handleOnRemove = () => {
    setIsEditing(false);
  };

  const handleOnEdit = () => {
    setIsEditing(true);
  };

  if (!contacts || contacts.name.length === 0 || isEditing) {
    return (
      <ContactsForm
        isEditing={isEditing}
        handleOnSubmit={handleOnSubmit}
        handleOnRemove={handleOnRemove}
        initialValues={contacts}
        logout={logout}
      />
    );
  }

  return <ContactsFilled contacts={contacts} handleOnEdit={handleOnEdit} />;
};
