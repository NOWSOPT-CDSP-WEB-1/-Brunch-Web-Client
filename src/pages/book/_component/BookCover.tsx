import styled from '@emotion/styled';

interface BookCoverProps {
  image: string;
}

const BookCover = ({ image }: BookCoverProps) => {
  return <Container src={image} alt="book_cover" />;
};

export default BookCover;

const Container = styled.img`
  width: 22.8rem;
  height: 32rem;
`;
