import styled from '@emotion/styled';

export type Article_type = {
  title: string;
  content: string;
  authorName: string;
  imageUrl: string;
};

export default function EachAritleComponent(article: Article_type) {
  return (
    <Container>
      <PostContainer>
        <Title>{article.title}</Title>
        <Content>{article.content}</Content>
        <AuthorWrapper>
          <ByText>by</ByText>
          <AuthorName>{article.authorName}</AuthorName>
        </AuthorWrapper>
      </PostContainer>
      <PostImage src={`${article.imageUrl}`} alt={`${article.title}`} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32rem;
  height: 7rem;
`;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 23rem;
  height: 7rem;
`;
const Title = styled.p`
  ${({ theme }) => theme.font.body5_10};
  color: ${({ theme }) => theme.color.gray09};
`;
const Content = styled.p`
  flex-wrap: wrap;
  height: 3rem;
  overflow: hidden;

  color: ${({ theme }) => theme.color.gray08};
  ${({ theme }) => theme.font.detail2};
  white-space: pre-wrap;
`;
//white-space는 공백이나 엔터있을 때 줄바꿈하도록
//flex-wrap은 줄넘어갔을때 띄워쓰기에 따라 밑으로 넘어옴
const AuthorWrapper = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 1rem;
`;
const ByText = styled.p`
  ${({ theme }) => theme.font.caption2};
  color: ${({ theme }) => theme.color.gray05};
`;
const AuthorName = styled.p`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray05};
`;
const PostImage = styled.img`
  height: 7.2rem;
`;
