import React from 'react';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ contact, id }) => (
        <li key={id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
