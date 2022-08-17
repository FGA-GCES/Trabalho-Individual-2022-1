import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import { Background, Center, BooksList, ServicesBook } from './Style';
import { getBooks } from '../../Services/Axios/bookService';
import Book from '../../Components/Book';


const Home = () => {
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const donate = () => {
        navigate('/donate');
    }

    const resBooks = async () => {
        await getBooks()
        .then((response) => setBooks(response?.data));
    };

    useEffect(() => {
        resBooks();
    }, []);

      const listBooks = books.map((book) =>
        <Book
            title={book.title}
            author={book.author}
            release_year={book.release_year}
            renter={book.renter}
            id={book.id}
            is_rented={book.is_rented}
            messageAlert={"Livro alugado com sucesso"}
            messageTernario={"Alugar livro"}
        />
      );

return(
    <Background>
            <h1>
                Bem vindo a Biblioteca
            </h1>
            <h1>
                Livros disponíveis
            </h1>
            <ServicesBook>
                <Button title="Doar livro" type="side" changeButton={donate}/>
            </ServicesBook>
        <Center>
            <BooksList>
                {listBooks}
            </BooksList>
        </Center>
    </Background>
    )
}

export default Home;