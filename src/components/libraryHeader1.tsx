import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function LibraryHeader1() {
  return (
    <Header>
      <LeftContainer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <LogoContainer>
            <LogobarIcon src="long_Black_bar.svg" alt="logo_blackbar"></LogobarIcon>
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
        <ProfileImg />
        <SearchIcon src="search_icon.svg" alt="searchIcon"></SearchIcon>
      </RightContainer>
    </Header>
  );
}

const Header = styled.header`
  position: absolute;
  left: 0rem;
  top: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 14px;
  width: 100%;
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
  left: 48px;
  top: 6px;
  width: 50%;
  height: 3px;
`;

const LogoTitle = styled.p`
  font: ${({ theme }) => theme.font.body2};
`;

const PageLinker = styled.div`
  display: flex;
  width: 69px;
  height: 14px;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray09};
`;

const ClickedPageLinker = styled.div`
  display: flex;
  width: 69px;
  height: 14px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  font: ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray12};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray09};
`;
const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
const WriteButton = styled.div`
  display: flex;
  height: 23px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.gray04};
`;
const WriteContent = styled.p`
  font: ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray08};
`;
const ProfileImg = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 30px;
  background: url(${`img_profile.png`}) lightgray 50% / cover no-repeat;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
