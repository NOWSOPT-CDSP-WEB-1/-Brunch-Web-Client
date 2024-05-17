import { Icon } from '@components/index';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';

const Home = () => {
  return (
    <Homecontainer>
      <BannerWrapper>
        <BannerImg src="banner.svg" alt="banner" />
        <BannerCloseImg src="banner-close.svg" alt="banner-close" />
      </BannerWrapper>

      <Icon icon={icons.search} />

      <BrunchGap>
        <div>
          <BrunchWrapper>
            <BrunchHeader>BRUNCH KEYWORLD</BrunchHeader>
            <BrunchHeadBelow>키워드로 분류된 다양한 글 모음</BrunchHeadBelow>
          </BrunchWrapper>
        </div>

        <KeywordGap>
          <KeywordWrapper>
            <Rectanguler> </Rectanguler>
            <SelectKeyword>관심있는 키워드</SelectKeyword>
          </KeywordWrapper>
          <TableWrapper>
            <table>
              <tr>
                <TableGap>
                  <TableText>지구한바퀴 세계여행</TableText>
                </TableGap>

                <TableGap>
                  <TableText>그림･웹툰</TableText>
                </TableGap>
                <TableGap>
                  <TableText>알수록 좋은 경제</TableText>
                </TableGap>
                <TableGap>
                  <TableText>IT 트렌드</TableText>
                </TableGap>

                <TableGap>
                  <TableText>사진･촬영</TableText>
                </TableGap>

                <TableGap>
                  <TableText>취향저격 영화 리뷰</TableText>
                </TableGap>
                <TableGap>
                  <TableText>오늘은 이런 책</TableText>
                </TableGap>
                <TableGap>
                  <TableText>뮤직 인사이드</TableText>
                </TableGap>
              </tr>
              <tr>
                <TableGap>
                  <TableText>글쓰기 코치</TableText>
                </TableGap>
                <TableGap>
                  <TableText>직장인 현실 조언</TableText>
                </TableGap>
                <TableGap>
                  <TableText>스타트업 경험담</TableText>
                </TableGap>
                <TableGap>
                  <TableText>육아 이야기</TableText>
                </TableGap>
                <TableGap>
                  <TableText>요리･레시피</TableText>
                </TableGap>
                <TableGap>
                  <TableText>건강･운동</TableText>
                </TableGap>
                <TableGap>
                  <TableText>멘탈 관리 심리 탐구</TableText>
                </TableGap>
                <TableGap>
                  <TableText>디자인 스토리</TableText>
                </TableGap>
              </tr>
              <tr>
                <TableGap>
                  <TableText>문화･예술</TableText>
                </TableGap>
                <TableGap>
                  <TableText>건축･설계</TableText>
                </TableGap>
                <TableGap>
                  <TableText>인문학･철학</TableText>
                </TableGap>
                <TableGap>
                  <TableText>쉽게 읽는 역사</TableText>
                </TableGap>
                <TableGap>
                  <TableText>우리집 반려동물</TableText>
                </TableGap>
                <TableGap>
                  <TableText>멋진 캘리그래피</TableText>
                </TableGap>
                <TableGap>
                  <TableText>사랑･이별</TableText>
                </TableGap>
                <TableGap>
                  <TableText>감성 에세이</TableText>
                </TableGap>
              </tr>
            </table>
          </TableWrapper>
        </KeywordGap>
      </BrunchGap>
    </Homecontainer>
  );
};

export default Home;

const Homecontainer = styled.div`
  width: 100%;
`;

const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 34.2rem;
`;

const BannerCloseImg = styled.img`
  position: absolute;
  top: 14.7rem;
  left: 108.7rem;
  display: flex;

  cursor: pointer;
`;

const BrunchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
`;

const BrunchGap = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

const KeywordGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
`;

const KeywordWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const BrunchHeader = styled.div`
  color: var(--gray10, #3d3d3d);
  text-align: center;
  ${({ theme }) => theme.font.head6};
`;

const BrunchHeadBelow = styled.div`
  color: var(--gray08, #909090);
  text-align: center;
  ${({ theme }) => theme.font.detail4_3};
`;

const Rectanguler = styled.span`
  width: 10px;
  height: 10px;

  background: var(--mint01, #00c6be);
  border: 1px solid var(--mint01, #00c6be);
`;

const SelectKeyword = styled.span`
  color: var(--mint01, #00c6be);

  ${({ theme }) => theme.font.detail3_12};
`;

const TableWrapper = styled.div`
  width: 689px;
  height: 255px;
`;

const TableText = styled.td`
  color: var(--gray09, #666);
  text-align: center;

  ${({ theme }) => theme.font.detail2};
`;

const TableGap = styled.td`
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 8.5rem;
  padding: 2rem 0.8rem;

  border: 1px solid #eee;
`;
