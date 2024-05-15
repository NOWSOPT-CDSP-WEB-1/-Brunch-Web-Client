import styled from '@emotion/styled';
import React from 'react';

const Home = () => {
  return (
    <Homecontainer>
      <BannerWrapper>
        <BannerImg src="banner.svg" alt="banner" />
        <BannerCloseImg src="banner-close.svg" alt="banner-close" />
      </BannerWrapper>
    </Homecontainer>
  );
};

export default Home;

const Homecontainer = styled.div`
  width: 100%;
`;

const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 34.2rem;
`;

const BannerCloseImg = styled.img`
  position: absolute;
  top: 14.7rem;
  left: 108.7rem;
  display: flex;

  cursor: pointer;
`;
