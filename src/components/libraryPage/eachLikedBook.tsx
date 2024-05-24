import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Book_size } from 'src/interface/Book_size';
import { Liked_book_type } from 'src/interface/Liked_book_type';

import BookImgForm from './BookImgForm';

export default function EachLikedBook(likedBook: Liked_book_type) {
  const boxSize: Book_size = { x: '12rem', y: '15.7rem' };
  const navi = useNavigate();
  return (
    <Container
      onClick={() => {
        navi(`/book/${likedBook.id}`);
      }}>
      <BookImgForm likedBook={likedBook} size={boxSize} />
      <Title>{likedBook.title}</Title>
      <AuthorWrapper>
        <ByText>by</ByText>
        <AuthorName>{likedBook.authorName}</AuthorName>
      </AuthorWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5rem;
`;
const Title = styled.p`
  max-width: 12rem;
  margin-top: 1rem;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.body5_10};
`;
const AuthorWrapper = styled.div`
  display: flex;
  gap: 2px;
`;
const ByText = styled.p`
  ${({ theme }) => theme.font.caption2};
  color: ${({ theme }) => theme.color.gray05};
`;
const AuthorName = styled.p`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray05};
`;
