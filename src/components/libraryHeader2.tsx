import styled from '@emotion/styled';
import { RefObject, useRef } from 'react';

export let navBookRef: RefObject<HTMLDivElement>;
export let navArticleRef: RefObject<HTMLDivElement>;
export let navLikedBookRef: RefObject<HTMLDivElement>;
export let navLikedArticleRef: RefObject<HTMLDivElement>;

export default function LibraryHeader2() {
  const navList = ['최근 본 브런치북', '최근 본 글', '라이킷한 브런치북', '라이킷한 글'];

  navBookRef = useRef<HTMLDivElement>(null);
  navArticleRef = useRef<HTMLDivElement>(null);
  navLikedBookRef = useRef<HTMLDivElement>(null);
  navLikedArticleRef = useRef<HTMLDivElement>(null);

  const navRefList = [navBookRef, navArticleRef, navLikedBookRef, navLikedArticleRef];

  function handleRefClick(navIndex: number) {
    navRefList[navIndex].current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Div>
      <LightImg src="light.svg" alt="lightimg" />
      <Container>
        <IntroFrame>
          <Intro1>최근 읽었던 작품을</Intro1>
          <Intro2>언제든 이어 읽을 수 있어요!</Intro2>
        </IntroFrame>
        <NavButtons>
          {navList.map((each, index) => {
            return (
              <EachNavButton key={index + 1} onClick={handleRefClick(index)!}>
                {each}
              </EachNavButton>
            );
          })}
        </NavButtons>
      </Container>
    </Div>
  );
}
const Div = styled.div``;
const LightImg = styled.img`
  position: absolute;
  top: 0rem;
  left: 25%;
  display: flex;
  width: 3rem;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 15rem;
`;
const IntroFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;
const Intro1 = styled.p`
  ${({ theme }) => theme.font.head4}
  color: ${({ theme }) => theme.color.gray11}
`;
const Intro2 = styled.p`
  ${({ theme }) => theme.font.head4}
  color: ${({ theme }) => theme.color.gray08}
`;
const NavButtons = styled.div`
  display: flex;
  align-items: flex-start;
`;
const EachNavButton = styled.button`
  display: flex;
  width: 8rem;
  height: 1.5rem;
  padding: 0rem 1.9rem 0rem 2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray08};
  white-space: nowrap;
`;
