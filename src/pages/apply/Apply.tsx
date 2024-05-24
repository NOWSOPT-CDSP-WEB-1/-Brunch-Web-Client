import { FloatingButton } from '@components';
import styled from '@emotion/styled';

import ApplyBtn from './_component/ApplyBtn';
import EssentialData from './_component/EssentialData';
import Footer from './_component/Footer';
import Header from './_component/Header';
import Qualifications from './_component/Qualifications';
import SignificantMatters from './_component/SignificantMatters';

const Apply = () => {
  return (
    <ApplyWrapper>
      <Header />
      <Qualifications />
      <EssentialData />
      <SignificantMatters />
      <Footer />
      <ApplyBtn />
      <FloatingButton />
    </ApplyWrapper>
  );
};

export default Apply;

const ApplyWrapper = styled.section`
  position: relative;
  width: 136.6rem;
`;
