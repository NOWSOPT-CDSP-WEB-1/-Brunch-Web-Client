import { NTag } from '@components';
import styled from '@emotion/styled';

import { keywordList } from './config';

interface keyWordType {
  label: string;
  isCheck: boolean;
  isNew: boolean;
}

const splitArray = (array: keyWordType[], size: number): keyWordType[][] => {
  const result: keyWordType[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const index = () => {
  const rows = splitArray(keywordList, 8);

  return (
    <KeywordContainer>
      <KeywordHeader>
        <KeywordTitle>BRUNCH KEYWORLD</KeywordTitle>
        <KeywordSubtitle>키워드로 분류된 다양한 글 모음</KeywordSubtitle>
      </KeywordHeader>
      <KeywordName>
        <Rectanguler />
        <KeywordText>관심있는 키워드</KeywordText>
      </KeywordName>
      <Table>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((keyword, cellIndex) => (
              <TableCell key={cellIndex} rowIndex={rowIndex} cellIndex={cellIndex} isCheck={keyword.isCheck}>
                <TableCellBox>
                  <KeywordLabel>{keyword.label}</KeywordLabel>
                  {keyword.isNew && (
                    <NTagWrapper>
                      <NTag />
                    </NTagWrapper>
                  )}
                </TableCellBox>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </KeywordContainer>
  );
};

export default index;

const KeywordContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 54.3rem;
`;

const KeywordHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.7rem;
  margin-bottom: 3.6rem;
`;

const KeywordTitle = styled.h1`
  ${({ theme }) => theme.font.head6};
  color: ${({ theme }) => theme.color.gray10};
`;

const KeywordSubtitle = styled.h2`
  ${({ theme }) => theme.font.detail4_3};
  color: ${({ theme }) => theme.color.gray08};
`;

const KeywordName = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const Rectanguler = styled.div`
  width: 1rem;
  height: 1rem;

  background-color: ${({ theme }) => theme.color.mint01};
`;

const KeywordText = styled.span`
  ${({ theme }) => theme.font.detail3_7};
  color: ${({ theme }) => theme.color.mint01};
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  position: relative;
  display: flex;
`;

const TableCell = styled.div<{ rowIndex: number; cellIndex: number; isCheck: boolean }>`
  position: absolute;
  top: ${({ rowIndex }) => rowIndex * 8.4}rem;
  left: ${({ cellIndex }) => cellIndex * 8.6}rem;
  width: 8.7rem;
  height: 8.5rem;

  ${({ theme }) => theme.font.detail2};
  color: ${({ theme }) => theme.color.gray09};

  border: 0.1rem solid ${({ theme }) => theme.color.gray02};
  ${(props) =>
    props.isCheck &&
    `
    color: ${props.theme.color.mint01};
    border-color: ${props.theme.color.mint01};
    z-index: 2;
  `}
`;

const TableCellBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  white-space: normal;
  word-break: keep-all;
`;

const NTagWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const KeywordLabel = styled.span`
  margin-top: 1rem;

  text-align: center;
`;
