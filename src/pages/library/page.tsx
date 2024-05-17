import LibraryHeader1 from 'src/components/libraryHeader1';
import LibraryHeader2, { navBookRef } from 'src/components/libraryHeader2';

//import { ReactComponent as LogobarIcon } from '../../assets/long_Black_bar.svg';
//import SearchIcon from '../../assets/search_icon.svg';
//이것도 안되넹

export default function LibraryPage() {
  return (
    <>
      <LibraryHeader1 />
      <LibraryHeader2 />
      <div ref={navBookRef} style={{ backgroundColor: 'black', position: 'absolute', top: '1000px' }}>
        ddffdfdfdd
      </div>
    </>
  );
}
