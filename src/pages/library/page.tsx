import { Article, FloatingButton, Header, LibraryHeader2, LikedBook, RecentBook } from '@components';
import styled from '@emotion/styled';

export default function LibraryPage() {
  return (
    <RouterPageWrapper>
      <Header />
      <LibraryHeader2 />
      <div id="recentBook">
        <RecentBook />
      </div>
      <div id="recentArticle">
        <Article sort={'recent'} />
      </div>
      <HeartImgWrapper>
        <HeartImg src="heart.svg" alt="heart" />
      </HeartImgWrapper>
      <GrayBg>
        <div id="likedBook">
          <LikedBook />
        </div>
        <div id="likedArticle">
          <Article sort={'liked'} />
        </div>
      </GrayBg>
      <FloatingButton />
    </RouterPageWrapper>
  );
}
const RouterPageWrapper = styled.section`
  width: 136.6rem;
`;

const HeartImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const HeartImg = styled.img`
  position: relative;
  top: 2rem;
  left: 33.5rem;
`;
const GrayBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: var(--gray01, #f8f8f8);
`;
