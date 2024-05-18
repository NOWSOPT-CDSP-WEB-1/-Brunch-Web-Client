import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import { Link } from 'react-router-dom';

export default function LibraryHeader1() {
  return (
    <Header>
      <LeftContainer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <LogoContainer>
            <LogobarIcon src="long Black bar.svg" alt="logo_blackbar"></LogobarIcon>
            <LogoTitle>brunch story</LogoTitle>
          </LogoContainer>
        </Link>

        <PageLinker>최근 업로드 글</PageLinker>
        <ClickedPageLinker>최근 읽었던 글</ClickedPageLinker>
        <PageLinker>내가 구독한 글</PageLinker>
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
}

const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: full;
  padding: 1.5rem 1.4rem;
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
`;
const LogobarIcon = styled.img`
  position: relative;
  top: 6px;
  left: 4.8rem;
  width: 50%;
  height: 3px;
`;

const LogoTitle = styled.p`
  ${({ theme }) => theme.font.body2};
`;

const PageLinker = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.9rem;
  height: 1.4rem;

  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray09};
  white-space: nowrap;
`;

const ClickedPageLinker = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 7rem;
  height: 1.4rem;
  place-content: center center;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray12};

  border-bottom: 1px solid ${({ theme }) => theme.color.gray09};

  white-space: nowrap;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray09};
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
