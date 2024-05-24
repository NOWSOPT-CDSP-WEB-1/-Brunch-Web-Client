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
  const [focusIndex, setFocusIndex] = useState(0);
  const [isRight, setIsRight] = useState(0);

  useEffect(() => {
    axios
      .get('https://www.sopt-brunch.p-e.kr/api/v1/books')
      .then((res) => {
        //recentBooks 추가 되게
        setRecentBooks(res.data.data.recentBooks);
      })
      .catch((err) => {
        alert(err);
      });
    setFocusIndex(0);
  }, []);

  //focusIndex는 가운데 크게 나올 친구 인덱스지정
  //그리고 옆에 돌아가는거는 이 focusIndex를 기준으로 원형으로 만들어서 돌리기

  function handleLeftButton() {
    setIsRight(-1);

    if (recentBooks) {
      if (focusIndex > 0) {
        setFocusIndex((focusIndex) => focusIndex - 1);
      } else if (focusIndex == 0) {
        setFocusIndex(() => recentBooks.length - 1);
      }

      //recentBooks마지막에 있는애를 맨앞으로 데려와야함
      const lastBook = recentBooks[recentBooks.length - 1];
      setRecentBooks(
        recentBooks.filter((each) => {
          return each.title !== lastBook.title;
        })
      );
      setRecentBooks((prevBooks) => (prevBooks ? [lastBook, ...prevBooks] : [lastBook]));
    }
  }

  function handleRightButton() {
    setIsRight(1);

    if (recentBooks) {
      if (focusIndex == recentBooks.length - 1) {
        setFocusIndex(() => 0);
      } else {
        setFocusIndex((prev) => prev + 1);
      }
      const [firstBook, ...restBooks] = recentBooks;
      setRecentBooks(restBooks);
      setRecentBooks((prevBooks) => (prevBooks ? [...prevBooks, firstBook] : [firstBook]));
    }
  }
  return (
    <Container>
      <LeftBody>
        <TitleContainer>
          <Title>최근 본 브런치북</Title>
          <Icon icon={icons.arrow_forward_ios} size="1.2rem" color="#3D3D3D" />
        </TitleContainer>
        {recentBooks && (
          <FocusBook
            key={focusIndex}
            id={recentBooks[0].id}
            title={recentBooks[0].title}
            authorName={recentBooks[0].authorName}
            bookImage={recentBooks[0].bookImage}
            description={recentBooks[0].description}
            episode={recentBooks[0].episode}
            requiredTime={recentBooks[0].requiredTime}
            progress={recentBooks[0].progress}
            lastViewed={recentBooks[0].lastViewed}
          />
        )}
      </LeftBody>
      <RightBody>
        <BookNavi>
          <button onClick={handleLeftButton}>
            <Icon icon={icons.arrow_back_ios} color={theme.color.gray07} />
          </button>
          <NowNbr>{focusIndex + 1}</NowNbr>
          {recentBooks && <TotalBookNum>/{recentBooks.length}</TotalBookNum>}
          <button onClick={handleRightButton}>
            <Icon icon={icons.arrow_forward_ios} color={theme.color.gray07} />
          </button>
        </BookNavi>
        <BookList>
          {recentBooks &&
            recentBooks.map((eachBook, index) => {
              return (
                <EachBookWrapper key={Math.random()} index={index} isRight={isRight}>
                  <BookImgForm likedBook={eachBook} size={boxSize} />
                  <ProgressBar>
                    <GreenBar progress={eachBook.progress}></GreenBar>
                  </ProgressBar>
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
  padding-left: 6.5rem;
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
  overflow: visible;
`;
const BookNavi = styled.div`
  display: flex;
  align-items: center;
  max-width: 12.2rem;
  height: 4.8rem;
  margin-left: auto;

  ${({ theme }) => theme.font.detail1};
  color: ${({ theme }) => theme.color.gray07};
`;
const NowNbr = styled.p`
  color: ${({ theme }) => theme.color.gray08};
`;
const BookList = styled.div`
  position: relative;
  left: -14rem;
  display: inline-flex;
  gap: 2.1rem;
  overflow: visible;
`;
//여기다가 css 첨에 옆 (-얼마) 에서 transform오게끔?
const EachBookWrapper = styled.div<{ index: number; isRight: number }>`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: center;

  visibility: ${({ index }) => (index == 0 ? 'hidden' : 'visible')};
  opacity: ${({ index }) => (index > 2 ? '0.5' : '1')};

  animation: ${({ isRight }) =>
    isRight === 1
      ? ({ index }) => (index > 0 ? 'rightmove 1s' : ({ index }) => (index == 0 ? 'rightfadeout 1s' : 'none'))
      : isRight === -1
        ? ({ index }) => (index > 1 ? 'leftmove 1s' : ({ index }) => (index == 1 ? 'leftfadeout 1s' : 'none'))
        : 'none'};

  @keyframes rightmove {
    0% {
      transform: translateX(14rem);
    }

    100% {
      transform: translate(0);
    }
  }

  @keyframes leftmove {
    0% {
      transform: translateX(-14rem);
    }

    100% {
      transform: translate(0);
    }
  }

  @keyframes rightfadeout {
    0% {
      transform: translateX(14rem);
      visibility: visible;
      opacity: 1;
    }

    100% {
      transform: translateX(14rem);
      opacity: 0;
    }
  }

  @keyframes leftfadeout {
    0% {
      visibility: visible;
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const ProgressBar = styled.div`
  width: 6.3rem;
  height: 2px;

  background-color: ${({ theme }) => theme.color.gray05};
`;
const GreenBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 2px;

  background-color: ${({ theme }) => theme.color.mint01};
`;

const TotalBookNum = styled.span`
  margin-right: 4px;
`;
