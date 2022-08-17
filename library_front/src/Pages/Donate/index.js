import { React, useCallback, useState } from 'react';
import { FaUserAlt, FaBook, FaCalendarAlt } from 'react-icons/fa';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { createBook } from '../../Services/Axios/bookService';
import { styles, Background, Center, Buttons } from './Style';
import { useNavigate } from 'react-router-dom';


const Donate = () => {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');  
  const [bookReleaseYear, setBookReleaseYear] = useState();

  const navigate = useNavigate();

  const cancel = () => {
    setBookName('');
    setBookAuthor('');
    setBookReleaseYear('');
  };

  const submit = async () => {
    const data = await createBook(
      bookName,
      bookAuthor,
      bookReleaseYear,
    ).then((response) => response.data)
    if (data) {
      alert('Cadastro de livro efetuado');
      return navigate('/');
    }
  }

  useCallback(() => {
    createBook();
  }, [sessionStorage.getItem('app-token')]);

  return (
    <Background>
      <Center>
        <h1 style={styles.access}>Doar livro</h1>

        <Input
          title="Nome do Livro"
          type="user"
          icon={<FaBook />}
          onChange={(name) => setBookName(name.target.value)}
          value={bookName}
        />

        <Input
          title="Nome do Autor do Livro"
          type="user"
          icon={<FaUserAlt />}
          onChange={(author) => setBookAuthor(author.target.value)}
          value={bookAuthor}
        />

        <Input
          title="Ano de Lançamento do Livro"
          type="user"
          icon={<FaCalendarAlt />}
          onChange={(releaseYear) => setBookReleaseYear(releaseYear.target.value)}
          value={bookReleaseYear}
        />
        <Buttons>
            <Button title="Cancelar" type="secondary" changeButton={cancel}/>
            <Button title="Doar" type="primary" changeButton={submit}/>
        </Buttons>
      </Center>
    </Background>
  );
};

export default Donate;