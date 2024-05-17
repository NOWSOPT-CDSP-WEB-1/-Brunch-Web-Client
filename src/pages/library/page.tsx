import LibraryHeader2 from '@components/libraryPage/libraryHeader2';
import LikedArticle from '@components/libraryPage/likedArticle';
import LikedBook from '@components/libraryPage/likedBook';
import RecentArticle from '@components/libraryPage/recentArticle';
import RecentBook from '@components/libraryPage/recentBook';
import LibraryHeader1 from 'src/components/libraryHeader1';

export default function LibraryPage() {
  return (
    <>
      <LibraryHeader1 />
      <LibraryHeader2 />
      <div id="최근 본 브런치북">
        <RecentBook />
      </div>
      <div id="최근 본 글">
        <RecentArticle />
      </div>
      <div id="라이킷한 브런치북">
        <LikedBook />
      </div>
      <div id="라이킷한 글">
        <LikedArticle />
      </div>
    </>
  );
}
