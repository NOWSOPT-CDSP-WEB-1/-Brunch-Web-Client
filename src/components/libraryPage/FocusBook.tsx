import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import theme from '@styles/theme';
import { Book_size } from 'src/interface/Book_size';
import { Liked_book_type } from 'src/interface/Liked_book_type';
import { Recent_book_type } from 'src/interface/Recent_book_type';

import BookImgForm from './BookImgForm';

export default function FocusBook(book: Recent_book_type) {
  const boxSize: Book_size = { x: '15.3rem', y: '21.3rem' };
  const toLikedBookType: Liked_book_type = {
    id: book.id,
    title: book.title,
    authorName: book.authorName,
    bookImage: book.bookImage,
  };

  return (
    <Container>
      <BookImgForm likedBook={toLikedBookType} size={boxSize} />
      <Content>
        <Title>{book.title}</Title>
        <Infos>
          <VolImage src="volume.svg" alt="volumeImg" />
          <Details>{`${book.episode}화`}</Details>
          <Icon icon={icons.schedule} size="1rem" color={theme.color.gray04} />
          <Details>{`${book.requiredTime}분`}</Details>
        </Infos>
        <Description>{book.description}</Description>
        <KeepButton>이어읽기</KeepButton>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 2rem;
  height: 21.3rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.p`
  margin-bottom: 5px;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.body3};
`;
const Infos = styled.div`
  display: flex;
  gap: 1px;
`;
const VolImage = styled.img`
  position: relative;
  top: 2px;
  width: 6px;
  height: 7px;
  margin-right: 2px;
`;
const Details = styled.p`
  ${({ theme }) => theme.font.detail4_12};
  color: ${({ theme }) => theme.color.gray09};
`;
const Description = styled.p`
  display: -webkit-box;
  margin-top: 1.5rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.color.gray08};
  text-overflow: ellipsis;
  ${({ theme }) => theme.font.detail4_12};
`;
const KeepButton = styled.button`
  width: 5rem;
  margin-top: 2rem;
  padding: 4px;

  color: ${({ theme }) => theme.color.gray08};

  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 3rem;

  ${({ theme }) => theme.font.detail4_3};
`;
