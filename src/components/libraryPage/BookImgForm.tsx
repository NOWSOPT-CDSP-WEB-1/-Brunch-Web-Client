import styled from '@emotion/styled';
import { Book_size } from 'src/interface/Book_size';
import { Liked_book_type } from 'src/interface/Liked_book_type';

function BookImgForm({ likedBook, size }: { likedBook: Liked_book_type; size: Book_size }) {
  return (
    <Container boxSize={size} bookImg={likedBook.bookImage}>
      <InfoContainer>
        <Title>{likedBook.title}</Title>
        <Author>{likedBook.authorName}</Author>
      </InfoContainer>
      <LogoText>brunch book</LogoText>
    </Container>
  );
}

export default BookImgForm;

const Container = styled.div<{ boxSize: Book_size; bookImg: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${({ boxSize }) => boxSize.x};
  min-height: ${({ boxSize }) => boxSize.y};

  background: url(${(props) => props.bookImg}) lightgray 50% / cover no-repeat;
  border-radius: 5px;
`;
const InfoContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 60%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.color.gray01};
`;
const Title = styled.p`
  flex-wrap: nowrap;
  max-width: 5rem;

  color: ${({ theme }) => theme.color.gray09};
  word-break: keep-all;
  ${({ theme }) => theme.font.detail3_7};
`;
const Author = styled.p`
  color: ${({ theme }) => theme.color.gray07};
  ${({ theme }) => theme.font.detail5};
`;
const LogoText = styled.p`
  position: relative;
  top: 2rem;

  color: ${({ theme }) => theme.color.white01};
  ${({ theme }) => theme.font.detail6};
`;
