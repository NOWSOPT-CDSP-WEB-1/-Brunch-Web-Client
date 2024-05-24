import styled from '@emotion/styled';

import BookCover from './BookCover';
import BookInfo, { BookDetailProps } from './BookInfo';

interface BookOverviewProps {
  bookOverview: BookDetailProps;
}

const BookDetail = ({ bookOverview }: BookOverviewProps) => {
  return (
    <Container>
      <BookCover image={bookOverview.bookImage} />
      <BookInfo {...bookOverview} />
    </Container>
  );
};

export default BookDetail;

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-left: 22.8rem;
`;
