import { FloatingButton, Header } from '@components';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ApplyAuthorBox from './_component/ApplyAuthorBox';
import ArticleList, { ArticleProps } from './_component/ArticleList';
import BookDetail from './_component/BookDetail';
import { BookDetailProps } from './_component/BookInfo';
import NavigateHeader, { ArrowType } from './_component/NavigateHeader';

const Book = () => {
  const { id } = useParams();
  const [position, setPosition] = useState(0);
  const [bookDetail, setBookDetail] = useState<BookDetailProps>();
  const [article, setArticle] = useState<ArticleProps[]>();

  const onArrowClick = (direction: ArrowType) => {
    if (direction === 'left') {
      if (position === 0) return;
      setPosition((prev) => prev - 1);
    }
    if (direction === 'right') {
      if (position === 1) return;
      setPosition((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/books/${id}`);

        setBookDetail(data.data.bookOverview[0]);
        setArticle(data.data.bookChapter);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
      <NavigateHeader position={position} onArrowClick={onArrowClick} title={bookDetail?.title ?? ''} />

      {bookDetail && article && (
        <>
          <DetailWrapper position={position}>
            <BookDetail bookOverview={bookDetail} />
          </DetailWrapper>

          <ArticleList article={article} />
          <ApplyAuthorBox authorName={bookDetail.authorName} />
        </>
      )}
      <FloatingButton />
    </div>
  );
};

export default Book;

const DetailWrapper = styled.section<{ position: number }>`
  transform: translateX(${({ position }) => position * -15}%);

  transition: transform 0.5s;
`;
