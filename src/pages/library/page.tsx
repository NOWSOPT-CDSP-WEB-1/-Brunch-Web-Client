import { LibraryHeader2, LikedArticle, LikedBook, RecentArticle, RecentBook } from '@components';
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
