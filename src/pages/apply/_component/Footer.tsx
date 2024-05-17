import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <NoticeWrapper>
        <NoticeText>
          아직
          <br />
          작가 신청 안내가 부족한가요?
        </NoticeText>
        <NoticeBtn>작가 신청 안내 자세히보기</NoticeBtn>
        <div>
          <OtherText>일반 문의는 </OtherText>
          <OtherText $underline={true}>고객 센터 문의하기</OtherText>
          <OtherText> 를 이용해주세요.</OtherText>
        </div>
      </NoticeWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 27.9rem;

  background-color: ${({ theme }) => theme.color.gray12};
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.5rem;
  margin-top: 7rem;
`;

const NoticeText = styled.p`
  color: ${({ theme }) => theme.color.white01};
  ${({ theme }) => theme.font.head3};
`;

const NoticeBtn = styled.button`
  width: 178px;
  height: 34px;
  margin-top: 1.6rem;
  margin-bottom: 1.9rem;

  color: ${({ theme }) => theme.color.gray04};

  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 30px;
`;

const OtherText = styled.span<{ $underline?: boolean }>`
  color: ${({ theme }) => theme.color.gray04};
  ${({ theme }) => theme.font.body3};
  ${({ $underline }) => ($underline ? 'cursor: pointer; text-decoration:underline;' : '')};
`;
