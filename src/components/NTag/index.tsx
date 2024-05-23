import styled from '@emotion/styled';

const index = () => {
  return <N>N</N>;
};

export default index;

const N = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  padding-top: 0.15rem;

  ${({ theme }) => theme.font.detail6};

  color: ${({ theme }) => theme.color.white01};

  background-color: ${({ theme }) => theme.color.mint01};
  border-radius: 50%;
`;
