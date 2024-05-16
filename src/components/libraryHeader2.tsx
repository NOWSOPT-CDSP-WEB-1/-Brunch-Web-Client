import styled from '@emotion/styled';

export default function LibraryHeader2() {
  return (
    <>
      <LightIcon src="light.svg" alt="lightimg" />
      <IntroFrame>
        <Intro1>최근 읽었던 작품을</Intro1>
        <Intro2>언제든 이어 읽을 수 있어요!</Intro2>
      </IntroFrame>
    </>
  );
}

const LightIcon = styled.img`
  display: flex;
  width: 31px;
  height: 79px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const IntroFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;
const Intro1 = styled.p`
font: ${({ theme }) => theme.font.head4}
color: ${({ theme }) => theme.color.gray11}
`;
const Intro2 = styled.p`
font: ${({ theme }) => theme.font.head4}
color: ${({ theme }) => theme.color.gray08}
`;
