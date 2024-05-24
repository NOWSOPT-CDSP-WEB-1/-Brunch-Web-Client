import styled from '@emotion/styled';

const index = ({ authorName }: { authorName: string }) => {
  return (
    <ApplyAuthorWrapper>
      <ApplyAuthorBox>
        <div>
          <ApplyTitle>{authorName} 작가를 구독해 보세요.</ApplyTitle>
          <ApplyDesc>작가를 구독하시면 발행 즉시 새 글 알림을 받아보실 수 있습니다!</ApplyDesc>
        </div>
        <ApplyButton type="button">+구독하기</ApplyButton>
      </ApplyAuthorBox>
    </ApplyAuthorWrapper>
  );
};

export default index;

const ApplyAuthorWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ApplyAuthorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 49.7rem;
  margin-top: 2.2rem;
  margin-bottom: 8.4rem;
  padding: 1.3rem 5.2rem 1.3rem 2.8rem;

  background-color: ${({ theme }) => theme.color.gray01};
`;

const ApplyTitle = styled.h3`
  ${({ theme }) => theme.font.body4_regular};
  color: ${({ theme }) => theme.color.gray11};
`;

const ApplyDesc = styled.p`
  margin-top: 0.6rem;

  ${({ theme }) => theme.font.detail3_7};
  color: ${({ theme }) => theme.color.gray07};
`;

const ApplyButton = styled.button`
  padding: 1rem 1.8rem;
  ${({ theme }) => theme.font.detail4_12};

  color: ${({ theme }) => theme.color.mint01};

  border: 0.1rem solid ${({ theme }) => theme.color.mint01};
  border-radius: 1.6rem;
`;
