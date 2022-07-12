import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactInfo,
  ContactItem,
  ContactRemoveBtn,
} from './ContactsList.styled';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              {name}: {number}
            </ContactInfo>
            <ContactRemoveBtn type="button" onClick={() => handleDelete(id)}>
              X
            </ContactRemoveBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
