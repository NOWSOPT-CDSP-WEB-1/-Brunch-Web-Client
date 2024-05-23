import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

import EachAritleComponent, { Article_type } from './eachArticle';

import { Icon } from '..';

//여기서 api 받아오고 props로 받은 liked나 recent구분하기

//받은 글들 배열 저장

type Sort = {
  sort: string;
};

export default function Article(sort: Sort) {
  //sort는 recent or like
  let sortText;
  const [postings, setPostings] = useState<Article_type[]>([]);

  if (sort.sort == 'recent') {
    sortText = '최근 본 글';
  } else {
    sortText = '라이킷한 글';
  }

  useEffect(() => {
    axios
      .get('https://www.sopt-brunch.p-e.kr/api/v1/postings', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (sort.sort == 'recent') {
          setPostings(res.data.data.recentPostings);
        }
        if (sort.sort == 'liked') {
          setPostings(res.data.data.likePostings);
        }
        //likeBooks에 추가되게
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <ArticleIndexWrapper>
        <ArticleIndex>{sortText}</ArticleIndex>
        <Icon icon={icons.arrow_forward_ios} size="1.2rem" color="#3D3D3D" />
      </ArticleIndexWrapper>

      <ArticleContainer>
        {postings.map((eachpost, index) => (
          <EachAritleComponent
            key={index + 1}
            title={`${eachpost.title}`}
            content={`${eachpost.content}`}
            authorName={`${eachpost.authorName}`}
            imageUrl={`${eachpost.imageUrl}`}
          />
        ))}
      </ArticleContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
`;
const ArticleIndexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 61.5rem;
`;
const ArticleIndex = styled.p`
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray11};
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-gap: 1rem 4rem;
  grid-template-columns: 1fr 1fr;
  max-width: 70rem;
`;
