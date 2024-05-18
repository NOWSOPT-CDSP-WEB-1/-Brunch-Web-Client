import styled from '@emotion/styled';

import EachAritleComponent from './eachArticle';

//여기서 api 받아오고 props로 받은 liked나 recent구분하기

//받은 글들 배열 저장
const recentPostings = [
  {
    title: '브런치스토리가 만든 콘텐츠 큐레이션 공간  [ 틈 ]',
    content:
      '모바일 다음(Daum) 첫 화면에서 [ 틈 ]을 만나보세요! 당연하게 바라봐온 것들이 여전히 유효할까요? 모든 것이 빠르게 변',
    authorName: '작가이름1',
    imageUrl: 'brunch_logo_b.png',
  },
  {
    title: '브런치스토리가 만든 콘텐츠 큐레이션 공간  [ 틈 ]',
    content:
      '모바일 다음(Daum) 첫 화면에서 [ 틈 ]을 만나보세요! 당연하게 바라봐온 것들이 여전히 유효할까요? 모든 것이 빠르게 변',
    authorName: '작가이름1',
    imageUrl: 'brunch_logo_b.png',
  },
  {
    title: '브런치스토리가 만든 콘텐츠 큐레이션 공간  [ 틈 ]',
    content:
      '모바일 다음(Daum) 첫 화면에서 [ 틈 ]을 만나보세요! 당연하게 바라봐온 것들이 여전히 유효할까요? 모든 것이 빠르게 변',
    authorName: '작가이름1',
    imageUrl: 'brunch_logo_b.png',
  },
  {
    title: '브런치스토리가 만든 콘텐츠 큐레이션 공간  [ 틈 ]',
    content:
      '모바일 다음(Daum) 첫 화면에서 [ 틈 ]을 만나보세요! 당연하게 바라봐온 것들이 여전히 유효할까요? 모든 것이 빠르게 변',
    authorName: '작가이름1',
    imageUrl: 'brunch_logo_b.png',
  },
];

type Sort = {
  sort: string;
};

export default function Article(sort: Sort) {
  //sort는 recent or like
  let sortText;

  if (sort.sort == 'recent') {
    sortText = '최근 본 글';
  } else {
    sortText = '라이킷한 글';
  }

  return (
    <Container>
      <ArticleIndexWrapper>
        <ArticleIndex>{sortText}</ArticleIndex>
        <img src="icn_next_small.svg" alt="nextSmall" />
      </ArticleIndexWrapper>

      <ArticleContainer>
        {recentPostings.map((eachpost, index) => (
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
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
`;
const ArticleIndexWrapper = styled.div`
  display: flex;
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
