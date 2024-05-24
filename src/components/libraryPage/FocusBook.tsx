import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import theme from '@styles/theme';
import { useNavigate } from 'react-router-dom';
import { Recent_book_type } from 'src/interface/Recent_book_type';

export default function FocusBook(book: Recent_book_type) {
  const navi = useNavigate();
  return (
    <Container
      onClick={() => {
        navi(`/book/${book.id}`);
      }}>
      <ImgContaier>
        <BookImg src={book.bookImage} />
        <ProgressBar>
          <GreenBar progress={book.progress}></GreenBar>
        </ProgressBar>
      </ImgContaier>
      <Content>
        <Title>{book.title}</Title>

        <Infos>
          <VolImage src="/src/assets/volume.svg" alt="volumeImg" />
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
  z-index: 10;
  display: flex;
  gap: 2rem;
  height: 25.4rem;

  cursor: pointer;

  transition: all;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0.3;
    }

    to {
      opacity: 1;
    }
  }
`;

const ImgContaier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: center;
`;
const BookImg = styled.img`
  min-width: 15.3rem;
  max-width: 15.3rem;
  height: 21.3rem;

  border-radius: 1.4px;
`;
const ProgressBar = styled.div`
  width: 8.4rem;
  height: 2px;

  background-color: ${({ theme }) => theme.color.gray05};
`;
const GreenBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 2px;

  background-color: ${({ theme }) => theme.color.mint01};
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
  max-width: 20rem;
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
