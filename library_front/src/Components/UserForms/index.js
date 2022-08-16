import React from 'react';
import Input from '../Input';
import { UserFormsColumnText } from './Style';

const UserForms = ({
  setInputName,
  inputName,
  setInputEmail,
  inputEmail
}) => {
  return (
    <UserFormsColumnText>
      <Input long type="text" title="Nome" setText={setInputName} value={inputName} />
      <Input long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
    </UserFormsColumnText>
  );
};

export default UserForms;