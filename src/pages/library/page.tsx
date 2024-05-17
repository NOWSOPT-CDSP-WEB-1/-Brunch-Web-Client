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
      <div id="recentBook">
        <RecentBook />
      </div>
      <div id="recentArticle">
        <RecentArticle />
      </div>
      <div id="likedBook">
        <LikedBook />
      </div>
      <div id="likedArticle">
        <LikedArticle />
      </div>
    </>
  );
}
