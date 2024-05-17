import styled from '@emotion/styled';

export default function LibraryHeader2() {
  const navList = ['최근 본 브런치북', '최근 본 글', '라이킷한 브런치북', '라이킷한 글'];
  const navId = ['recentBook', 'recentArticle', 'likedBook', 'likedArticle'];
  return (
    <>
      <LightImg src="light.svg" alt="lightimg" />
      <Container>
        <IntroFrame>
          <Intro1>최근 읽었던 작품을</Intro1>
          <Intro2>언제든 이어 읽을 수 있어요!</Intro2>
        </IntroFrame>
        <NavButtons>
          {navId.map((each, index) => (
            <EachNavButton href={`#${each}`} key={index + 1}>
              {navList[index]}
            </EachNavButton>
          ))}
        </NavButtons>
      </Container>
    </>
  );
}
const LightImg = styled.img`
  position: absolute;
  top: 0rem;
  left: 33rem;
  display: flex;
  width: 3.1rem;
  height: 12rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const Container = styled.div`
  position: relative;
  top: 0rem;
  left: 3rem;
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
const EachNavButton = styled.a`
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
