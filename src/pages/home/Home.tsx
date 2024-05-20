import { Footer } from '@components';
import styled from '@emotion/styled';
import { WeekdaysData } from '@pages/home/HomeDay';
import { ARTICLES } from '@pages/home/HomeStyle';
import { useState } from 'react';

import KeywordTable from './_components/KeywordTable';
import MainCarousel from './_components/MainCarousel';
import MainIntro from './_components/MainIntro';
import MainWriter from './_components/MainWriter';

const Home = () => {
  const [selectedDay, setSelectedDay] = useState('월');

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };
  return (
    <Homecontainer>
      <BannerWrapper>
        <BannerImg src="banner.svg" alt="banner" />
        <BannerCloseImg src="banner-close.svg" alt="banner-close" />
      </BannerWrapper>
      <MainContainer>
        <MainIntro />
        <MainCarousel />
        <KeywordTable />
        <section>
          <DayHeaderWrapper>
            <DayHeader>요일별 연재</DayHeader>
            <DayHeader2>브런치북 요일별 연재를 만나보세요</DayHeader2>

            <div>
              {Object.keys(WeekdaysData).map((day: string) => (
                <>
                  <DayButton key={day} onClick={() => handleDayClick(day)}>
                    <DayText>{day}</DayText>
                  </DayButton>
                  <DayButton2></DayButton2>
                </>
              ))}
            </div>

            <Hr></Hr>
          </DayHeaderWrapper>
          <SpanDiv>
            <SpanWrapper>
              <DaySpan>
                <Span>
                  <span>
                    <SpanImg src="Ellipse 10.svg" alt="점" />
                  </span>
                  <DaySpan>최신순</DaySpan>
                </Span>
              </DaySpan>
              <DaySpan>응원순</DaySpan>
              <DaySpan>라이킷순</DaySpan>
            </SpanWrapper>
          </SpanDiv>
          <DayHeaderWrapper>
            <WrapperUl>
              {ARTICLES.map((article) => (
                <WrapperFont key={article.id}>
                  <WrapDiv className="wrapper">
                    <span className="font">
                      <div>
                        <WrapH1>{article.title}</WrapH1>
                        <WrapH2>
                          {article.subtitle}･･･<N>N</N>
                          <Green src="Ellipse 9.svg" alt="Ellipse 9" />
                        </WrapH2>
                      </div>
                      <H3Gap>
                        <WrapH3>by</WrapH3>
                        <WrapH4>{article.author}</WrapH4>
                      </H3Gap>
                    </span>
                    <span>
                      <WrpperImg src={article.imageSrc} alt="" />
                    </span>
                  </WrapDiv>
                </WrapperFont>
              ))}
            </WrapperUl>
            <Hr></Hr>

            <WrapperDiv>
              <FooterText>연재 작품 전체 보기</FooterText>
              <span>
                <FooterImg src="Frame 160.svg" alt="화살표" />
              </span>
            </WrapperDiv>
          </DayHeaderWrapper>
        </section>
        <MainWriter />
      </MainContainer>
      <Footer />
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

const DayHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
`;

const DayHeader = styled.div`
  color: ${({ theme }) => theme.color.gray10};
  text-align: center;

  ${({ theme }) => theme.font.body4_regular};
`;

const DayHeader2 = styled.div`
  color: var(--gray08, #909090);
  text-align: center;

  ${({ theme }) => theme.font.detail4_3};
`;

const SpanWrapper = styled.div`
  display: inline-flex;
  gap: 15px;
  justify-content: flex-end;
  width: 68.8rem;
`;

const DayText = styled.div`
  color: var(--gray09, #666);
  text-align: center;

  ${({ theme }) => theme.font.detail2};
`;

const DayButton = styled.button`
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 40.117px;
  height: 35px;
  padding: 8px;
`;

const DayButton2 = styled.button`
  width: 40.117px;
  height: 35px;
`;

const DaySpan = styled.span`
  color: var(--gray09, #666);
  font-weight: 400;
  font-size: 9px;

  ${({ theme }) => theme.font.detail4_3};
`;

const Span = styled.div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const SpanImg = styled.img`
  width: 4px;
  height: 4px;
`;

const WrapperUl = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 18px;
  align-content: center;
  align-items: center;
  width: 688px;
  margin-top: 4px;

  border-bottom: 1px solid #eee;
`;

const WrapperFont = styled.div`
  width: 335px;
  height: 86px;
  padding: 18px 14px;

  border: 1px solid #eee;
`;

const Hr = styled.hr`
  width: 685px;
  height: 1px;

  background: 1px solid red;
`;

const WrpperImg = styled.img`
  width: 56px;
  height: 58px;
`;

const WrapDiv = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const WrapH1 = styled.div`
  color: ${({ theme }) => theme.color.gray08};
  font-weight: 400;
  font-size: 9px;

  ${({ theme }) => theme.font.detail4_3};
`;

const WrapH2 = styled.div`
  position: relative;

  margin-top: 2px;

  color: ${({ theme }) => theme.color.gray09};

  ${({ theme }) => theme.font.detail1};
`;

const WrapH3 = styled.span`
  margin-top: 9px;

  color: ${({ theme }) => theme.color.gray05};
  font-weight: 400;
  font-size: 9px;

  ${({ theme }) => theme.font.caption2};
`;

const WrapH4 = styled.span`
  margin-top: 9px;

  color: ${({ theme }) => theme.color.gray05};
  ${({ theme }) => theme.font.detail4_3};
`;

const H3Gap = styled.div`
  display: flex;
  gap: 2px;
`;

const FooterText = styled.span`
  color: ${({ theme }) => theme.color.gray09};
  font-weight: 400;
  font-size: 9px;
  ${({ theme }) => theme.font.detail4_3};
`;

const FooterImg = styled.img`
  width: 12px;
  height: 12px;
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 28px;
  padding-left: 10px;

  border: 1px solid var(--gray04, #d5d5d3);
  border-radius: 30px;
`;

const SpanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const N = styled.span`
  position: absolute; /* N을 절대 위치로 설정 */
  top: 0;
  z-index: 2; /* 이미지 위에 오도록 z-index 설정 */

  color: ${({ theme }) => theme.color.white01};
  text-align: center;
  ${({ theme }) => theme.font.detail6};
`;

const Green = styled.img`
  position: absolute; /* 이미지를 절대 위치로 설정 */
  top: 0;
  z-index: 1;
  width: 10px;
  height: 10px;
`;

const MainContainer = styled.main`
  padding: 0 33.9rem;
`;
