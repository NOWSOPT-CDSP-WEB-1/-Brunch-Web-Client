import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Liked_book_type } from 'src/interface/Liked_book_type';

import EachLikedBook from './eachLikedBook';

import Icon from '../Icon';

//api -> get likedBooks id title authorName bookImage

export default function LikedBook() {
  const [likeBooks, setLikeBooks] = useState<Liked_book_type[]>([]);

  useEffect(() => {
    axios
      .get('https://www.sopt-brunch.p-e.kr/api/v1/books', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        //likeBooks에 추가되게
        setLikeBooks(res.data.data.likedBooks);
      })
      .catch((err) => {
        alert(err.data.message);
      });
  }, []);

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
        {likeBooks.map((eachBook, index) => {
          if (index < 5)
            return (
              <EachLikedBook
                key={eachBook.id}
                id={eachBook.id}
                title={eachBook.title}
                authorName={eachBook.authorName}
                bookImage={eachBook.bookImage}
              />
            );
        })}
      </LikedBooksContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 68.4rem;
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
  color: ${({ theme }) => theme.color.gray11};
  ${({ theme }) => theme.font.head4};
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
  width: 100%;
`;
