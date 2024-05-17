import LibraryHeader1 from 'src/components/libraryHeader1';
import LibraryHeader2, { navBookRef } from 'src/components/libraryHeader2';

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
