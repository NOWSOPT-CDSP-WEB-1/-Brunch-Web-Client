import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeType } from '@styles/theme';
import { useContext } from 'react';

import DisplayText from './DisplayText';

const Qualifications = () => {
  const theme = useContext(ThemeContext) as ThemeType;

  return (
    <Container>
      <Head5Text>
        브런치{'\n'}작가를 애타게{'\n'}찾고 있습니다.
      </Head5Text>

      <FlexBox>
        <QualificationWrapper>
          <Rotate>
            <Divider />
            <Head4Text>01. 자격 조건</Head4Text>
          </Rotate>

          <DisplayWrapper>
            <DisplayText color={theme.color.black} content={`누구나\n쓸 - 수\n있다!`} />
            <DisplayText color={theme.color.gray06} content={`단,\n작가-만\n발행가능`} />
          </DisplayWrapper>

          <ContentText>
            브런치스토리는 작가 신청을 통해 작가로 선정되어야 글을 &apos;발행&apos;하실 수 있습니다. <br /> 출간 작가,
            특정 분야의 전문가가 아니더라도 진정성 있게 글을 쓸 분이라면 도전하실 수 있습니다.
            <br />
            브런치 작가가 되어 좋은 글을 발행하고, 독자들을 만나보세요.
          </ContentText>
        </QualificationWrapper>
      </FlexBox>
    </Container>
  );
};

export default Qualifications;

const Container = styled.div`
  height: 67.5rem;
`;

const Head5Text = styled.pre`
  position: relative;
  top: 8rem;
  left: 4rem;
  display: inline;
  ${({ theme }) => theme.font.head5};
`;

const Divider = styled.div`
  width: 6.5rem;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.color.gray10};
`;

const Rotate = styled.div`
  position: absolute;
  top: 18rem;
  left: -5rem;
  display: flex;
  gap: 1.7rem;
  align-items: baseline;

  transform: rotate(90deg);
`;

const Head4Text = styled.p`
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
  margin-top: 8rem;
`;

const ContentText = styled.p`
  width: 56.5rem;
  margin-top: 3rem;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.body1};
`;
