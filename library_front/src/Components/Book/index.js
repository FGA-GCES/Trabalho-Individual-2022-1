import { React } from 'react';
import { Background, BookDiv } from './style';


const Book = ({
    title, author, release_year, renter, id, is_rented,
}) => (
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
    </Background>
)

export default Book;