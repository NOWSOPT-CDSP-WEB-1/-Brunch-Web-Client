import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';

import EachLikedBook from './eachLikedBook';
//api -> get likedBooks id title authorName bookImage
const likeBooks = [
  {
    id: 1,
    title: '무용하고도 유용한 이야기',
    authorName: '홍길동',
    bookImage: 'brunch_logo_b.png',
  },
  {
    id: 2,
    title: 'title title 책 2',
    authorName: '홍길동',
    bookImage: 'brunch_logo_b.png',
  },
  {
    id: 3,
    title: 'title title 책 3',
    authorName: '홍길동',
    bookImage: 'brunch_logo_b.png',
  },
  {
    id: 4,
    title: 'title title 책 4',
    authorName: '홍길동',
    bookImage: 'brunch_logo_b.png',
  },
  {
    id: 5,
    title: 'title5',
    authorName: '홍길동',
    bookImage: 'brunch_logo_b.png',
  },
];

export default function LikedBook() {
  return (
    <Container>
      <TitleWrapper>
        <LikedTitle1>당신이 좋아한 글과 브런치북을</LikedTitle1>
        <LikedTitle2>다시 꺼내 읽어보세요.</LikedTitle2>
      </TitleWrapper>
      <BookIndexWrapper>
        <BookIndex>라이킷한 브런치북</BookIndex>
        <Icon icon={icons.arrow_forward_ios} size="1.2rem" color="#3D3D3D" />
      </BookIndexWrapper>
      <LikedBooksContainer>
        {likeBooks.map((eachBook) => (
          <EachLikedBook
            key={eachBook.id}
            id={eachBook.id}
            title={eachBook.title}
            authorName={eachBook.authorName}
            bookImage={eachBook.bookImage}
          />
        ))}
      </LikedBooksContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  margin-top: 2.6rem;
  margin-bottom: 4rem;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 3.6rem;
`;
const LikedTitle1 = styled.p`
  ${({ theme }) => theme.font.head4};
  color: ${({ theme }) => theme.color.gray11};
`;
const LikedTitle2 = styled.p`
  ${({ theme }) => theme.font.head4};
  color: ${({ theme }) => theme.color.gray08};
`;
const BookIndexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const BookIndex = styled.p`
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray11};
`;
const LikedBooksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
