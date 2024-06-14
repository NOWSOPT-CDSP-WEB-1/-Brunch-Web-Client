import { Dispatch, SetStateAction, useState } from 'react';
import { Recent_book_type } from 'src/interface/Recent_book_type';

const useBookNavi = (
  recentBooks: Recent_book_type[] | undefined,
  setRecentBooks: Dispatch<SetStateAction<Recent_book_type[] | undefined>>,
  focusIndex: number,
  setFocusIndex: Dispatch<SetStateAction<number>>
) => {
  const [isRight, setIsRight] = useState(0);

  function handleLeftButton() {
    setIsRight(-1);

    const books = recentBooks || [];

    if (books !== undefined) {
      if (focusIndex > 0) {
        setFocusIndex((focusIndex) => focusIndex - 1);
      } else if (focusIndex == 0) {
        setFocusIndex(() => books.length - 1);
      }

      //recentBooks마지막에 있는애를 맨앞으로 데려와야함
      const lastBook = books[books.length - 1];
      setRecentBooks(
        books.filter((each) => {
          return each.title !== lastBook.title;
        })
      );
      setRecentBooks((prevBooks) => (prevBooks ? [lastBook, ...prevBooks] : [lastBook]));
    }
  }

  function handleRightButton() {
    setIsRight(1);
    const books = recentBooks || [];
    if (books !== undefined) {
      if (focusIndex == books.length - 1) {
        setFocusIndex(() => 0);
      } else {
        setFocusIndex((prev) => prev + 1);
      }
      const [firstBook, ...restBooks] = books;
      setRecentBooks(restBooks);
      setRecentBooks((prevBooks) => (prevBooks ? [...prevBooks, firstBook] : [firstBook]));
    }
  }

  return { handleLeftButton, handleRightButton, isRight };
};

export default useBookNavi;
