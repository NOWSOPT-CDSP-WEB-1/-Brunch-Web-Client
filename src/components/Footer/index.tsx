import { Logo } from '@components';
import styled from '@emotion/styled';

import FooterMenu from './_components/FooterMenu';
import { ServiceMenu, PolicyMenu, SnsMenu } from './config';

const index = () => {
  return (
    <Footer>
      <FooterInfo>
        <FooterQuotation>
          <Logo color="white" />
          <Slogan>You can make anything by writing.</Slogan>
          <SloganWriter>C.s.levels</SloganWriter>
        </FooterQuotation>
        <FooterMenus>
          <FooterMenu menuList={ServiceMenu} />
          <FooterMenu menuList={PolicyMenu} />
          <FooterMenu menuList={SnsMenu} />
        </FooterMenus>
      </FooterInfo>
      <FooterCorp>
        <img src="kakao-corp.svg" alt="kakao_corp" />
        <img src="store-logo.svg" alt="store logo" />
      </FooterCorp>
    </Footer>
  );
};

export default index;

const Footer = styled.footer`
  height: 30rem;
  margin-top: 12rem;
  padding: 3rem 33.9rem 0;

  background-color: ${({ theme }) => theme.color.gray12};
  cursor: default;
`;

const FooterInfo = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3.4rem;
`;

const FooterQuotation = styled.div`
  width: 12.3rem;

  .brunch-logo {
    background-color: ${({ theme }) => theme.color.white01};

    img {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

const Slogan = styled.p`
  margin-top: 1.3rem;

  ${({ theme }) => theme.font.caption1};
  color: ${({ theme }) => theme.color.gray05};
`;

const SloganWriter = styled.span`
  ${({ theme }) => theme.font.caption2};
  color: ${({ theme }) => theme.color.gray05};
`;

const FooterMenus = styled.div`
  display: flex;
  gap: 7.6rem;
`;

const FooterCorp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.8rem;

  border-top: 0.1rem solid ${({ theme }) => theme.color.gray11};
`;
