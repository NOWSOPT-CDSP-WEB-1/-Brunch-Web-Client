import Article from '@components/libraryPage/Article';
import LibraryHeader2 from '@components/libraryPage/libraryHeader2';
import LikedBook from '@components/libraryPage/likedBook';
import RecentBook from '@components/libraryPage/recentBook';
import styled from '@emotion/styled';
import LibraryHeader1 from 'src/components/libraryHeader1';

export default function LibraryPage() {
  return (
    <>
      <LibraryHeader1 />
      <LibraryHeader2 />
      <Main>
        <div id="recentBook">
          <RecentBook />
        </div>
        <div id="recentArticle">
          <Article sort={'recent'} />
        </div>
        <div id="likedBook">
          <LikedBook />
        </div>
        <div id="likedArticle">
          <Article sort={'liked'} />
        </div>
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
