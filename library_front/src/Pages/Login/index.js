import { React, useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { styles, Background, Center } from './Style';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/Axios/accountService';

const LoginScreen = () => {
  const [emailReceived, setEmailReceived] = useState();
  const [passwordReceived, setPasswordReceived] = useState();
  const navigate = useNavigate();


  const submit = async () => {
    const data = await login(
      emailReceived, 
      passwordReceived, 
    ).then((response) => response.data)
    if (data) {
      sessionStorage.setItem('app-token', data.token);
      sessionStorage.setItem('app-userID', data.user.id);
      return navigate('/');
    }
  }

  return (
    <Background>
      <Center>
        <h1 style={styles.access}>Entrar</h1>

        <Input
          title="Usuário"
          type="user"
          icon={<FaUserAlt />}
          onChange={(email) => setEmailReceived(email.target.value)}
          value={emailReceived}
        />

        <Input
          title="Senha"
          type="password"
          icon={<FaLock />}
          onChange={(passwordUser) => setPasswordReceived(passwordUser.target.value)}
          value={passwordReceived}
        />

        <Button title="Entrar" type="primary" changeButton={submit}/>
      </Center>
    </Background>
  );
};

export default LoginScreen;