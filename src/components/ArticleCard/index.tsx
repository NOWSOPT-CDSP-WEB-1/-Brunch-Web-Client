import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';
import { ArticleProps } from '@pages/book/_component/ArticleList';
import { icons } from '@styles/icons';
import { ThemeType } from '@styles/theme';
import { convertTwoDigit } from '@utils/convertTwoDigit';
import { useContext } from 'react';

import { Icon } from '..';

interface ArticleCardProps extends ArticleProps {
  chapterNum: number;
}

const index = ({ chapterNum, title, content, imageUrl, requiredTime, commentCount }: ArticleCardProps) => {
  const theme = useContext(ThemeContext) as ThemeType;

  return (
    <Container>
      <ListNum>{convertTwoDigit(chapterNum)}</ListNum>

      <TextWrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>

        <RuntimeWrapper>
          <Icon icon={icons.clock} size="1rem" color={theme.color.gray04} />
          <RuntimeText>{requiredTime}분</RuntimeText>
          <Dot />
          <CommentText>댓글 {commentCount}</CommentText>
        </RuntimeWrapper>
      </TextWrapper>

      <BookThumbnail src={imageUrl} alt={title} />
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
  align-items: center;
  margin-top: 1.4rem;
`;

const RuntimeText = styled.span`
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.color.gray04};

  ${({ theme }) => theme.font.detail4_3};
`;

const Dot = styled.span`
  width: 1px;
  height: 1px;
  margin: 0 0.7rem;
  background: var(--gray07, #a8a8a8);
`;

const CommentText = styled.span`
  color: ${({ theme }) => theme.color.gray04};

  ${({ theme }) => theme.font.detail4_3};
`;

const BookThumbnail = styled.img`
  height: 100%;
  height: 8.5rem;
  object-fit: cover;
`;
