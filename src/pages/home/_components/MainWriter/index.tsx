import styled from '@emotion/styled';
import { useState } from 'react';

import { memberDataList } from './config';

import ProfileCard from '../ProfileCard';

type PartType = 'plan' | 'design' | 'web' | 'server';

const PartText = {
  plan: '기획',
  design: '디자인',
  web: '웹',
  server: '서버',
};

const index = () => {
  const [selectedPart, setSelectedPart] = useState<PartType>('plan');

  return (
    <FullWrapper>
      <WrapperHeader>
        <WrapperMainHeader>
          <div>
            <WriterMainHeader>BRUNCH WRITERS</WriterMainHeader>
          </div>
          <div>
            <WriterMainHeader2>브런치 추천작가</WriterMainHeader2>
          </div>
        </WrapperMainHeader>
        <WrapperButton>
          {Object.keys(memberDataList).map((part) => {
            return (
              <KeywordButton
                key={`part-${part}`}
                isSelect={selectedPart === part}
                onClick={() => setSelectedPart(part as PartType)}>
                {PartText[part as PartType]}
              </KeywordButton>
            );
          })}
        </WrapperButton>
      </WrapperHeader>
      <Wrapper>
        {memberDataList[selectedPart].map((member, index) => {
          return <ProfileCard key={`profile-${index}`} memberData={member} />;
        })}
      </Wrapper>
    </FullWrapper>
  );
};

export default index;

const FullWrapper = styled.section`
  position: relative;
  left: -33.9rem;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  align-items: center;
  width: 136.6rem;
  padding: 6.5rem 33.9rem 7.2rem;

  background: ${({ theme }) => theme.color.gray01};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-content: flex-start;
  align-items: flex-start;
`;
const WriterMainHeader = styled.div`
  color: var(--gray10, #3d3d3d);
  text-align: center;

  ${({ theme }) => theme.font.head6}
`;

const WriterMainHeader2 = styled.div`
  color: var(--gray08, #909090);
  text-align: center;

  ${({ theme }) => theme.font.detail4_3}
`;

const WrapperMainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
`;

// const Keyword = styled.div`
//   ${({ theme }) => theme.font.detail2}
//   color: ${({ theme }) => theme.color.mint01};
// `;

const KeywordButton = styled.button<{ isSelect: boolean }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  height: 2.3rem;
  padding: 0.8rem 1.3rem;

  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray07};

  background: ${({ theme }) => theme.color.white01};
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.color.gray02};
  border-radius: 3rem;

  ${({ isSelect, theme }) =>
    isSelect &&
    `
    color: ${theme.color.mint01};
    border-color: ${theme.color.mint01};
  `}
`;

const WrapperButton = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
  align-items: center;
  justify-content: center;
`;
