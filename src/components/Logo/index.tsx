import styled from '@emotion/styled';

interface logoType {
  color?: 'black' | 'white';
}

const index = ({ color = 'black' }: logoType) => {
  return (
    <LogoWrapper className="brunch-logo">
      {color === 'black' ? <LogoImg src="brunch-logo.svg" /> : <LogoImg src="brunch-logo-white.svg" />}
    </LogoWrapper>
  );
};

export default index;

const LogoWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  border-radius: 50%;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
