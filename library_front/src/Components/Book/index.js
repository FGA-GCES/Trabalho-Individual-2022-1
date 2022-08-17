import { React } from 'react';
import { Background, BookDiv } from './style';
import { useNavigate } from 'react-router-dom';
import { rentBooks } from '../../Services/Axios/bookService';
import Button from '../../Components/Button';

const Book = ({
    title, author, release_year, renter, id, is_rented, messageAlert, messageTernario,
}) => {
    const navigate = useNavigate();

    const rent = async () => {
        const data = await rentBooks(
            id,
            sessionStorage.getItem('app-userID')
        ).then((response) => response.data)
        if (data) {
            alert(messageAlert);
            window.location.reload(); 
            return navigate('/');
        }
    }
    
    return (
        <Background>
            <BookDiv>
                {title}
            </BookDiv>
            <BookDiv>
                Autor: {author}
            </BookDiv>
            <BookDiv>
                Ano: {release_year}
            </BookDiv>
            <BookDiv>
                Alugado: {is_rented ? "Sim" : "Não"  }
            </BookDiv>
            {(is_rented && messageTernario === "Alugar livro") 
            ? null 
            : (sessionStorage.getItem('app-userID') === null) 
            ? null 
            : <Button title={messageTernario} type="bookButton" changeButton={rent}/>}
        </Background>
    )
} 

export default Book;