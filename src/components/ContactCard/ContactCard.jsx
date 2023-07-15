import React from 'react';

import {
  ContactList,
  ContactCard,
  ContactName,
  ContactNumber,
  RiDeleteBinLineSvg,
  ContactUl,
} from './ContactCard.styled';

export const Contact = ({ array, onDeleteItem }) => {
  return (
    <ContactUl>
      {array.map(contact => {
        return (
          <ContactList key={contact.id}>
            <ContactCard href="#" onClick={e => e.preventDefault()}>
              <ContactName>{contact.name} </ContactName>
              <ContactNumber>{contact.number}</ContactNumber>
              <RiDeleteBinLineSvg onClick={() => onDeleteItem(contact.id)} />
            </ContactCard>
          </ContactList>
        );
      })}
    </ContactUl>
  );
};