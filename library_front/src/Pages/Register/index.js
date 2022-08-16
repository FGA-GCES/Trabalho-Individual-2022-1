import { validateSignUp } from '../../Utils/validations';
import { React, useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { styles, Background, Center, Buttons } from './Style';
import { registerAccount } from '../../Services/Axios/accountService';


const Register = () => {
  const [inputRegisterUserUsername, setRegisterUserInputUsername] = useState('');
  const [inputRegisterUserEmail, setRegisterUserInputEmail] = useState('');  
  const [passwordReceived, setPasswordReceived] = useState();
  const [inputFirstName, setRegisterUserFirstName] = useState('');  
  const [inputLastName, setRegisterUserLastName] = useState('');
  
  const navigate = useNavigate();

  const submit = async () => {
    if (validateSignUp(inputRegisterUserEmail,
      inputRegisterUserUsername)) {
        alert('Cadastro efetuado')
    }
    const data = await registerAccount(
      inputFirstName, 
      inputLastName, 
      inputRegisterUserEmail, 
      inputRegisterUserUsername, 
      passwordReceived).then((response) => response.data)
    
    if (data) {
      return navigate('/login');
    }

    
    return undefined;
  };

  const cancel = () => {
    setRegisterUserInputUsername('');
    setRegisterUserInputEmail('');
    setPasswordReceived('');
  };

  return (
    <Background>
      <Center>
        <h1 style={styles.access}>Registro</h1>

        <Input
          title="Usuário"
          type="user"
          icon={<FaUserAlt />}
          onChange={(userName) => setRegisterUserInputUsername(userName.target.value)}
          value={inputRegisterUserUsername}
        />

        <Input
          title="Primeiro nome"
          type="user"
          icon={<FaUserAlt />}
          onChange={(firstName) => setRegisterUserFirstName(firstName.target.value)}
          value={inputFirstName}
        />

        <Input
          title="Último nome"
          type="user"
          icon={<FaUserAlt />}
          onChange={(lastName) => setRegisterUserLastName(lastName.target.value)}
          value={inputLastName}
        />
        <Input
          title="Email"
          type="user"
          icon={<FaUserAlt />}
          onChange={(email) => setRegisterUserInputEmail(email.target.value)}
          value={inputRegisterUserEmail}
        />

        <Input
          title="Senha"
          type="password"
          icon={<FaLock />}
          onChange={(passwordUser) => setPasswordReceived(passwordUser.target.value)}
          value={passwordReceived}
        />

        <Buttons>
            <Button title="Cancelar" type="secondary" changeButton={cancel}/>
            <Button title="Registrar" type="primary" changeButton={submit}/>
        </Buttons>
      </Center>
    </Background>
  );
};

export default Register;
