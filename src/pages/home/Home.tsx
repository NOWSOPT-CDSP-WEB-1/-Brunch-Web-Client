import { FloatingButton, Footer, Header } from '@components';
import styled from '@emotion/styled';

import Apply from './_components/Apply';
import Article from './_components/Aricle';
import Banner from './_components/Banner';
import DayArticle from './_components/DayArticle';
import KeywordTable from './_components/KeywordTable';
import MainCarousel from './_components/MainCarousel';
import MainIntro from './_components/MainIntro';
import MainWriter from './_components/MainWriter';

const Home = () => {
  return (
    <Homecontainer>
      <Banner />
      <Header />
      <MainContainer>
        <MainIntro />
        <MainCarousel />
        <KeywordTable />
        <DayArticle />
        <MainWriter />
        <Apply />
        <Article />
      </MainContainer>
      <Footer />
      <FloatingButton />
    </Homecontainer>
  );
};

export default Home;

const Homecontainer = styled.div`
  width: 100%;
`;

const MainContainer = styled.main`
  /* margin-top: 2rem; */
  padding: 1rem 33.9rem 0;
  overflow-x: hidden;
`;
