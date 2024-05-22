import { ArticleCard } from '@components';
import styled from '@emotion/styled';
import React from 'react';

export interface ArticleProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  requiredTime: number;
  commentCount: number;
}

interface ArticleListProps {
  article: ArticleProps[];
}

const ArticleList = ({ article }: ArticleListProps) => {
  return (
    <Container>
      <Wrapper>
        {article?.map((_article, i) => (
          <React.Fragment key={`article-fragment-${i}`}>
            <ArticleCard key={`article-${i}`} chapterNum={i + 1} {..._article} />
            <Divider />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ArticleList;

const Container = styled.section`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%;
  margin: 2.2rem 0;

  &:last-child {
    display: none;
  }
  border: 0.8px solid ${({ theme }) => theme.color.gray03};
`;
