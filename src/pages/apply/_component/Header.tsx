import LogoBig from '@assets/logo_big.svg?react';
import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';

const Header = () => {
  return (
    <Container>
      <StyledLogo />
      <Icon icon={icons.search} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.4rem 4rem;
`;

const StyledLogo = styled(LogoBig)`
  cursor: pointer;
`;
