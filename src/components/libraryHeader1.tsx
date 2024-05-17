import { Icon } from '@components/index';
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
  left: 0rem;
  top: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.4rem;
  width: full;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.gray11};
`;
const LogobarIcon = styled.img`
  position: relative;
  left: 4.8rem;
  top: 6px;
  width: 50%;
  height: 3px;
`;

const LogoTitle = styled.p`
  ${({ theme }) => theme.font.body2};
`;

const PageLinker = styled.button`
  display: flex;
  width: 6.9rem;
  height: 1.4rem;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray09};
  white-space: nowrap;
`;

const ClickedPageLinker = styled.button`
  display: flex;
  width: 7rem;
  height: 1.4rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray12};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray09};
  white-space: nowrap;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;
const WriteButton = styled.button`
  display: flex;
  height: 2.3rem;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.color.gray04};
`;
const WriteContent = styled.p`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray08};
`;
const ProfileImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  border-radius: 3rem;
  cursor: pointer;
`;

const IconWrapper = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
