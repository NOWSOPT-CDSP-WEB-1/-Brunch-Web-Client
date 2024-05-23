import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const getLastPathSegment = () => {
    const pathSegments = window.location.pathname.split('/').filter((segment) => segment !== '');
    return pathSegments.length !== 0 ? pathSegments[0] : '';
  };

  const navigate = useNavigate();

  const selectMenu = getLastPathSegment();

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    switch (name) {
      case 'UPLOAD':
        break;
      case 'READ':
        navigate('/library');
        break;
      case 'SUBSCRIBE':
        break;
    }
  };

  return (
    <Header>
      <LeftContainer>
        <LogoContainer onClick={() => navigate('/')}>
          <img src="brunch_logo_small.svg" alt="logo_blackbar" />
        </LogoContainer>
        <HeaderMenu type="button" name="UPLOAD" onClick={handleClickMenu}>
          최근 업로드 글
        </HeaderMenu>
        <HeaderMenu
          type="button"
          name="READ"
          onClick={handleClickMenu}
          isClick={selectMenu === 'book' || selectMenu === 'library'}>
          최근 읽었던 글
        </HeaderMenu>
        <HeaderMenu type="button" name="SUBSCRIBE" onClick={handleClickMenu}>
          내가 구독한 글
        </HeaderMenu>
      </LeftContainer>

      <RightContainer>
        <WriteButton>
          <WriteContent>글쓰기</WriteContent>
        </WriteButton>
        <ProfileImg src="img_profile.png" alt="profileImg" />
        <IconWrapper>
          <Icon icon={icons.search} />
        </IconWrapper>
      </RightContainer>
    </Header>
  );
};

export default index;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 1.4rem;

  background-color: ${({ theme }) => theme.color.white01};
  opacity: 0.9;
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.color.gray11};

  cursor: pointer;
`;

const HeaderMenu = styled.button<{ isClick?: boolean }>`
  height: 1.5rem;
  margin: 0 0.48rem;
  padding: 0;

  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray09};

  &:hover {
    color: ${({ theme }) => theme.color.gray12};

    border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
  }

  ${(props) =>
    props.isClick &&
    `
    border-bottom: 0.1rem solid ${props.theme.color.black};
    color: ${props.theme.color.gray12};
  `}
`;

const RightContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;
const WriteButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 2.3rem;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 3rem;
`;
const WriteContent = styled.p`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray08};
`;
const ProfileImg = styled.img`
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
  border-radius: 3rem;
`;

const IconWrapper = styled.button`
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
`;
