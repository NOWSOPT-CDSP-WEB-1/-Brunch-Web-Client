import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import { ThemeType } from '@styles/theme';
import { convertTwoDigit } from '@utils/convertTwoDigit';
import { useContext } from 'react';

import { Icon } from '..';

export interface ArticleProps {
  chapterId: string;
  chapterTitle: string;
  content: string;
  chapterImage: string;
  chapterRuntime: string;
}

const index = ({ chapterId, chapterTitle, content, chapterImage, chapterRuntime }: ArticleProps) => {
  const theme = useContext(ThemeContext) as ThemeType;

  return (
    <Container>
      <ListNum>{convertTwoDigit(chapterId)}</ListNum>

      <TextWrapper>
        <Title>{chapterTitle}</Title>
        <Content>{content}</Content>

        <RuntimeWrapper>
          <Icon icon={icons.clock} size="1rem" color={theme.color.gray04} />
          <RuntimeText>{chapterRuntime}</RuntimeText>
        </RuntimeWrapper>
      </TextWrapper>

      <BookThumbnail src={chapterImage} alt={chapterTitle} />
    </Container>
  );
};

export default index;

const Container = styled.article`
  display: flex;
  gap: 1.9rem;
  width: 49.5rem;

  &:first-child {
    padding-top: 0;
  }
  cursor: pointer;
`;
const ListNum = styled.span`
  ${({ theme }) => theme.font.body4_regular};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.5rem;
`;

const Title = styled.h3`
  ${({ theme }) => theme.font.body3};
`;

const Content = styled.p`
  display: -webkit-box;
  margin-top: 0.8rem;
  overflow: hidden;

  color: ${({ theme }) => theme.color.gray07};
  ${({ theme }) => theme.font.detail3_7};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: normal;
  text-overflow: ellipsis;
`;

const RuntimeWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  margin-top: 1.4rem;
`;

const RuntimeText = styled.span`
  color: ${({ theme }) => theme.color.gray04};

  ${({ theme }) => theme.font.detail4_3};
`;

const BookThumbnail = styled.img`
  height: 100%;
  height: 8.5rem;
  object-fit: cover;
`;
