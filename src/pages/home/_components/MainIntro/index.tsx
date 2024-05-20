import { Logo } from '@components';
import styled from '@emotion/styled';

const index = () => {
  return (
    <>
      <IntroHeader>
        <IntroH2>작품이 되는 이야기, 브런치스토리</IntroH2>
        <Logo />
      </IntroHeader>
      <IntroH3>브런치스토리에 담긴 아름다운 작품을 감상해 보세요.</IntroH3>
      <IntroH3>그리고 다시 꺼내 보세요.</IntroH3>
      <IntroH3Light>서랍 속 간직하고 있는 글과 감성을.</IntroH3Light>
      <NoticeWrapper>
        <NoticeIcon>Notice</NoticeIcon>
        <NoticeLink>‘응원하기’ 정식 오픈 소식 및 이용 안내</NoticeLink>
      </NoticeWrapper>
    </>
  );
};

export default index;

const IntroHeader = styled.header`
  position: relative;

  .brunch-logo {
    position: absolute;
    top: -1rem;
    left: 32.5rem;
  }
`;
const IntroH2 = styled.h2`
  ${({ theme }) => theme.font.head3};
  color: ${({ theme }) => theme.color.gray11};
`;

const IntroH3 = styled.h3`
  ${({ theme }) => theme.font.head3};
  color: ${({ theme }) => theme.color.gray04};
`;

const IntroH3Light = styled.h3`
  ${({ theme }) => theme.font.head3};
  color: ${({ theme }) => theme.color.gray02};
`;

const NoticeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3rem;
  margin-top: 1.5rem;
`;

const NoticeIcon = styled.span`
  margin-right: 0.6rem;

  ${({ theme }) => theme.font.caption2};
  color: ${({ theme }) => theme.color.mint01};
`;

const NoticeLink = styled.a`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray06};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
