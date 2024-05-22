import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import theme from '@styles/theme';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book_size } from 'src/interface/Book_size';
import { Recent_book_type } from 'src/interface/Recent_book_type';

import BookImgForm from './BookImgForm';
import FocusBook from './FocusBook';

export default function RecentBook() {
  const boxSize: Book_size = { x: '12rem', y: '15.7rem' };
  const [recentBooks, setRecentBooks] = useState<Recent_book_type[]>();
  const [focusIndex, setFocusIndex] = useState<number>(0);
  //여기서 최근 읽었던 책 목록 조회 -> recentBooks get
  /*
  const recentBooks = [
    {
      id: 10,
      title: '칼 든 괴한에게 쫓긴 밤',
      authorName: '노마드',
      bookImage: 'null',
      description:
        '새벽 4시, 밀라노를 걷다 칼 든 괴한에게 쫓겼습니다. 밀라노에 이르기까지의 여정, 그 밤, 그리고 하루하루를 살아가며 트라우마를 극복해가는 과정을 담았습니다. 죽을 위기를 넘기며 맞이한 가치관의 변화와 배운 교훈, 그리고 이후의 삶에 대해, 이제서야 써내릴 수 있어 글로 풀어냅니다.',
      episode: 8,
      requiredTime: 15,
      progress: 70,
      lastViewed: '2024-01-17T11:19:06',
    },
    {
      id: 9,
      title: '씁!! 가만히 좀 있어',
      authorName: '노란콩',
      bookImage: 'null',
      description: '가만히 쉬는게 너무 어려운 사람이 살아가는 법.',
      episode: 6,
      requiredTime: 30,
      progress: 50,
      lastViewed: '2024-02-17T11:19:03',
    },
  ];*/
  useEffect(() => {
    axios
      .get('https://www.sopt-brunch.p-e.kr/api/v1/books')
      .then((res) => {
        //recentBooks 추가되게
        console.log(res.data);
        setRecentBooks(res.data.data.recentBooks);
      })
      .catch((err) => {
        alert(err);
      });
    setFocusIndex(0);
  }, []);

  //focusIndex는 가운데 크게 나올 친구 인덱스지정

  //그리고 옆에 돌아가는거는 이 focusIndex를 기준으로 원형으로 만들어서 돌리기

  return (
    <Container>
      <LeftBody>
        <TitleContainer>
          <Title>최근 본 브런치북</Title>
          <Icon icon={icons.arrow_forward_ios} size="1.2rem" color="#3D3D3D" />
        </TitleContainer>
        {recentBooks && (
          <FocusBook
            id={recentBooks[focusIndex].id}
            title={recentBooks[focusIndex].title}
            authorName={recentBooks[focusIndex].authorName}
            bookImage={recentBooks[focusIndex].bookImage}
            description={recentBooks[focusIndex].description}
            episode={recentBooks[focusIndex].episode}
            requiredTime={recentBooks[focusIndex].requiredTime}
            progress={recentBooks[focusIndex].progress}
            lastViewed={recentBooks[focusIndex].lastViewed}
          />
        )}
      </LeftBody>
      <RightBody>
        <BookNavi>
          <button onClick={() => {}}>
            <Icon icon={icons.arrow_back_ios} color={theme.color.gray07} />
          </button>
          <NowNbr>{focusIndex + 1}</NowNbr>
          {recentBooks && `/${recentBooks.length}`}
          <button>
            <Icon icon={icons.arrow_forward_ios} color={theme.color.gray07} />
          </button>
        </BookNavi>
        <BookList>
          {recentBooks &&
            recentBooks.map((eachBook, index) => {
              return (
                <EachBookWrapper key={index + 1}>
                  <BookImgForm likedBook={eachBook} size={boxSize} />
                </EachBookWrapper>
              );
            })}
        </BookList>
      </RightBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 28.4rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 41.4rem;
  height: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.p`
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray11};
`;
const RightBody = styled.div`
  width: 31rem;
  padding: 1.2rem;
  overflow: hidden;
`;
const BookNavi = styled.div`
  display: flex;
  align-items: center;
  width: 12.2rem;
  height: 4.8rem;

  ${({ theme }) => theme.font.detail1};
  color: ${({ theme }) => theme.color.gray07};
`;
const NowNbr = styled.p`
  color: ${({ theme }) => theme.color.gray08};
`;
const BookList = styled.div`
  display: inline-flex;
  gap: 2.1rem;
  overflow: visible;
`;
const EachBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
