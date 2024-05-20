import styled from '@emotion/styled';

const index = () => {
  return (
    <LogoWrapper className="brunch-logo">
      <LogoImg src="brunch-logo.svg" />
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
