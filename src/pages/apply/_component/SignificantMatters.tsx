import { ThemeContext } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeType } from '@styles/theme';
import { useContext } from 'react';

import DisplayText from './DisplayText';

const SignificantMatters = () => {
  const theme = useContext(ThemeContext) as ThemeType;

  return (
    <Container>
      <FlexBox>
        <QualificationWrapper>
          <Rotate>
            <Divider />
            <Head4Text>03. 유의 사항</Head4Text>
          </Rotate>

          <DisplayWrapper>
            <DisplayText color={theme.color.black} content={`좌 - 절\n |      |\n금 - 지`} />
            <DisplayText color={theme.color.gray06} content={`승인이\n안될-수\n있다!`} />
          </DisplayWrapper>

          <ContentText>
            브런치스토리는 작가님들의 좋은 글이 작품이 되고, 독자들에게 영감을 주기를 바랍니다. <br />
            그러나 심사에 참고할 자료가 부족하거나, 부적절한 소재의 내용이 포함되는 등의 경우 <br />
            신청이 거절될 수 있는 점 미리 양해 부탁드립니다.
          </ContentText>
        </QualificationWrapper>
      </FlexBox>
    </Container>
  );
};

export default SignificantMatters;

const Container = styled.div`
  height: 67.5rem;
`;

const Divider = styled.div`
  width: 6.5rem;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.color.gray10};
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

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.body1};
`;
