import Arrow from '@assets/arrow.svg';
import styled from '@emotion/styled';

const ScrollFollowButton = () => {
  return (
    <BtnContainer>
      <BtnText>
        브런치 작가
        <br /> 신청하기
      </BtnText>
      <Arrow />
    </BtnContainer>
  );
};

export default ScrollFollowButton;

const BtnContainer = styled.button`
  position: fixed;
  top: 58rem;
  right: 20rem;
  display: flex;
  flex-direction: column;
  width: 14.2rem;
  height: 14.2rem;
  padding: 2.2rem 4.7rem 2rem 2rem;

  text-align: start;

  background-color: ${({ theme }) => theme.color.white01};
  box-shadow: 0 4px 30.1px 7px rgb(0 0 0 / 16%);
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.white02};
    transform: translateY(-10px) scale(1.05);
  }
`;

const BtnText = styled.p`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.font.head4};
  color: ${({ theme }) => theme.color.gray10};
`;
