import { Recent_book_type } from 'src/interface/Recent_book_type';

import BookImgForm from './BookImgForm';

export default function FocusBook(book: Recent_book_type) {
  return (
    <div>
      <BookImgForm id={book.id} title={book.title} authorName={book.authorName} bookImage={book.bookImage} />
    </div>
  );
}
