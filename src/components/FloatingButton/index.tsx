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
  right: calc(${window.innerWidth > 1366 ? '100vw - 136.6rem - (100vw - 136.6rem) / 2 + 2rem' : '2rem'});
  bottom: 30px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;

  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

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
  gap: 3px;
  align-items: center;
  justify-content: center;
  height: 23px;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 30px;
`;

const TopBtnText = styled.span`
  color: ${({ theme }) => theme.color.gray08};
  ${({ theme }) => theme.font.caption2};
`;
