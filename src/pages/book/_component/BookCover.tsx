import styled from '@emotion/styled';

interface BookCoverProps {
  image: string;
}

const BookCover = ({ image }: BookCoverProps) => {
  return <Container src={image || ''} alt="" />;
};

export default BookCover;

const Container = styled.img`
  margin-left: 22.8rem;
  width: 22.8rem;
  height: 32rem;
  object-fit: cover;
`;
