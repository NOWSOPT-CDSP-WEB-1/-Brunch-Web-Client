import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();
  return (
    <ApplyWriter onClick={() => navigate('/apply')}>
      <img src="apply-writer.svg" alt="apply wirter banner" />
    </ApplyWriter>
  );
};

export default index;

const ApplyWriter = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 9.3rem;
  margin-bottom: 12.1rem;

  img {
    cursor: pointer;
  }
`;
