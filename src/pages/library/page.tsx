import { Header, Article, LibraryHeader2, LikedBook, RecentBook } from '@components';
import styled from '@emotion/styled';

export default function LibraryPage() {
  return (
    <>
      <Header />
      <LibraryHeader2 />
      <Main>
        <div id="recentBook">
          <RecentBook />
        </div>
        <div id="recentArticle">
          <Article sort={'recent'} />
        </div>
        <HeartImg src="heart.svg" alt="heart" />
        <GrayBg>
          <div id="likedBook">
            <LikedBook />
          </div>
          <div id="likedArticle">
            <Article sort={'liked'} />
          </div>
        </GrayBg>
      </Main>
    </>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
