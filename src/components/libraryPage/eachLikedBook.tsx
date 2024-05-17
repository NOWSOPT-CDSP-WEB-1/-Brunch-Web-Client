import styled from '@emotion/styled';
import { Liked_book_type } from 'src/interface/Liked_book_type';

import { BookImgForm } from '..';

export default function EachLikedBook(likedBook: Liked_book_type) {
  return (
    <Container>
      <BookImgForm
        id={likedBook.id}
        title={likedBook.title}
        authorName={likedBook.authorName}
        bookImage={likedBook.bookImage}
      />
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
