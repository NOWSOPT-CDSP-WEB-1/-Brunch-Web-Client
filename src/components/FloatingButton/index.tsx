import QuestionIcon from '@assets/question.svg?react';
import TopIcon from '@assets/top.svg?react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <FloatingContainer isVisible={isVisible}>
      {isVisible && (
        <>
          <QuestionButton onClick={() => alert('우울할땐 우웅~')}>
            <QuestionIcon />
          </QuestionButton>

          <TopButton onClick={scrollToTop}>
            <TopBtnText>TOP</TopBtnText>
            <TopIcon />
          </TopButton>
        </>
      )}
    </FloatingContainer>
  );
};

export default FloatingButton;

const FloatingContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;

  z-index: 10;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.5s,
    visibility 0.5s;
`;

const QuestionButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 100%;
`;

const TopButton = styled.button`
  display: flex;
  height: 23px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.gray04};
`;

const TopBtnText = styled.span`
  color: ${({ theme }) => theme.color.gray08};
  ${({ theme }) => theme.font.caption2};
`;
