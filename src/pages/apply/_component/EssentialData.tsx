import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeType } from '@styles/theme';
import { useContext } from 'react';

import DisplayText from './DisplayText';

const EssentialData = () => {
  const theme = useContext(ThemeContext) as ThemeType;

  return (
    <Container>
      <FlexBox>
        <QualificationWrapper>
          <Rotate>
            <Divider />
            <Head4Text>02. 필수자료</Head4Text>
          </Rotate>

          <DisplayWrapper>
            <DisplayText color={theme.color.white01} content={`이건\n꼭\n필요해!`} />
            <DisplayText color={theme.color.gray09} content={`작가소개\n활동계획\n직접쓴글`} />
          </DisplayWrapper>

          <ContentText>
            작가 신청에 필요한 자료를 미리 준비해주세요.
            <br />
            <br /> 1. 작가 소개, 브런치스토리 활동 계획, 참고용 홈페이지나 SNS 주소.
            <br />
            2. 직접 쓴 글 필수! 브런치스토리 저장글 또는 참고 글 확인 주소
          </ContentText>
        </QualificationWrapper>
      </FlexBox>
    </Container>
  );
};

export default EssentialData;

const Container = styled.div`
  height: 67.5rem;

  background-color: ${({ theme }) => theme.color.gray12};
`;

const Divider = styled.div`
  width: 6.5rem;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.color.white01};
`;

const Rotate = styled.div`
  position: absolute;
  top: 24rem;
  left: -5rem;
  display: flex;
  gap: 1.7rem;
  align-items: baseline;

  transform: rotate(90deg);
`;

const Head4Text = styled.p`
  color: ${({ theme }) => theme.color.white01};
  ${({ theme }) => theme.font.head4};
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const QualificationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 56.5rem;
  margin-top: 14.5rem;
`;

const ContentText = styled.p`
  width: 56.5rem;
  margin-top: 3rem;

  color: ${({ theme }) => theme.color.white01};
  ${({ theme }) => theme.font.body1};
`;
