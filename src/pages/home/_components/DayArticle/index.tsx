import { Icon, NTag } from '@components';
import styled from '@emotion/styled';
import { WeekdaysData } from '@pages/home/HomeDay';
import { ARTICLES } from '@pages/home/HomeStyle';
import { icons } from '@styles/icons';
import { useState } from 'react';

const index = () => {
  const [selectedDay, setSelectedDay] = useState('월');

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };
  return (
    <DayArticleContainer>
      <DayHeaderWrapper>
        <DayHeader>요일별 연재</DayHeader>
        <DayHeader2>브런치북 요일별 연재를 만나보세요</DayHeader2>
        <DayButtonWrapper>
          {Object.keys(WeekdaysData).map((day: string) => (
            <DayButton key={day} onClick={() => handleDayClick(day)}>
              <DayText>{day}</DayText>
            </DayButton>
          ))}
        </DayButtonWrapper>
      </DayHeaderWrapper>
      <SpanWrapper>
        <DayDiv>
          <SpanImg src="Ellipse 10.svg" alt="점" />
          <DaySpan>최신순</DaySpan>
        </DayDiv>
        <DaySpan>라이킷순</DaySpan>
      </SpanWrapper>
      <DayArticleWrapper>
        <WrapperUl>
          {ARTICLES.map((article) => (
            <WrapperFont key={article.id}>
              <WrapDiv className="wrapper">
                <span className="font">
                  <div>
                    <WrapH1>{article.title}</WrapH1>
                    <TitleWrapper>
                      <WrapH2>{article.subtitle}</WrapH2>
                      <NTag />
                    </TitleWrapper>
                  </div>
                  <H3Gap>
                    <WrapH3>by</WrapH3>
                    <WrapH4>{article.author}</WrapH4>
                  </H3Gap>
                </span>
                <WrpperImg src={article.imageSrc} alt="article thumbnail" />
              </WrapDiv>
            </WrapperFont>
          ))}
        </WrapperUl>
      </DayArticleWrapper>
      <WrapperDiv>
        <ButtonWrapper>
          <FooterText>연재 작품 전체 보기</FooterText>
          <Icon icon={icons.arrow_forward_ios} size="1.2rem" />
        </ButtonWrapper>
      </WrapperDiv>
    </DayArticleContainer>
  );
};

export default index;

const DayArticleContainer = styled.section`
  margin-top: 8.4rem;
`;

const DayHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;

  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray02};
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

const DayButtonWrapper = styled.div`
  display: flex;
  gap: 3.4rem;
  margin-top: 2.3rem;
`;

const SpanWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.4rem;
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

const DayDiv = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const DaySpan = styled.span`
  align-content: center;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail4_3};
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

const WrpperImg = styled.img`
  width: 56px;
  height: 58px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  max-width: 20.5rem;
  margin-top: 0.2rem;
  margin-right: 0.4rem;
  overflow: hidden;

  color: ${({ theme }) => theme.color.gray09};
  white-space: nowrap;
  text-overflow: ellipsis;

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
  padding-top: 0.2rem;

  color: ${({ theme }) => theme.color.gray09};
  font-weight: 400;
  font-size: 9px;
  ${({ theme }) => theme.font.detail4_3};
`;

const DayArticleWrapper = styled.div`
  padding-bottom: 0.9rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray02};
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3.9rem;
  margin-bottom: 10.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.9rem;
  height: 28px;

  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 30px;
`;
