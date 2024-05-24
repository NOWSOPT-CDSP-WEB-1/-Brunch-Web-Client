import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const index = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 290) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BannerWrapper>
      <div>
        <BannerImg src="banner.svg" alt="banner" />
        <BannerCloseImg src="banner-close.svg" alt="banner-close" onClick={handleScrollToContent} />
      </div>
      <SmallBannerWrapper className={isVisible ? 'visible' : ''} isVisible={isVisible} ref={contentRef}>
        <SmallBanner src="/banner-small.png" alt="small-banner" />
      </SmallBannerWrapper>
    </BannerWrapper>
  );
};

export default index;

const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 34.2rem;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BannerCloseImg = styled.img`
  position: absolute;
  top: 14.7rem;
  left: 108.7rem;
  display: flex;

  cursor: pointer;
`;

const SmallBannerWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 68.8rem;
  height: 5rem;

  visibility: hidden;
  opacity: 0;

  transition:
    visibility 0s,
    opacity 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  ${(props) =>
    props.isVisible &&
    `
    background-color: ${props.theme.color.black};
  `}

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const SmallBanner = styled.img`
  width: 100%;
  height: 100%;
`;
