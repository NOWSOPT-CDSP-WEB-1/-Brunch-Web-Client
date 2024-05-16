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
