import { NTag } from '@components';
import styled from '@emotion/styled';

import { keywordList } from './config';

interface keyWordType {
  label: string;
  isCheck: boolean;
  isNew: boolean;
}

// const index = () => {
//   return (
//     <BrunchGap>
//       <div>
//         <BrunchWrapper>
//           <BrunchHeader>BRUNCH KEYWORLD</BrunchHeader>
//           <BrunchHeadBelow>키워드로 분류된 다양한 글 모음</BrunchHeadBelow>
//         </BrunchWrapper>
//       </div>

//       <KeywordGap>
//         <KeywordWrapper>
//           <Rectanguler> </Rectanguler>
//           <SelectKeyword>관심있는 키워드</SelectKeyword>
//         </KeywordWrapper>
//         <TableWrapper>
//           <table>
//             <tr>
//               <TableGap>
//                 <TableText>지구한바퀴 세계여행</TableText>
//               </TableGap>

//               <TableGap>
//                 <TableText>그림･웹툰</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>알수록 좋은 경제</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>IT 트렌드</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>사진･촬영</TableText>
//               </TableGap>

//               <TableGap>
//                 <TableText>취향저격 영화 리뷰</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>오늘은 이런 책</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>뮤직 인사이드</TableText>
//               </TableGap>
//             </tr>
//             <tr>
//               <TableGap>
//                 <TableText>글쓰기 코치</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>직장인 현실 조언</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>스타트업 경험담</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>육아 이야기</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>요리･레시피</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>건강･운동</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>멘탈 관리 심리 탐구</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>디자인 스토리</TableText>
//               </TableGap>
//             </tr>
//             <tr>
//               <TableGap>
//                 <TableText>문화･예술</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>건축･설계</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>인문학･철학</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>쉽게 읽는 역사</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>우리집 반려동물</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>멋진 캘리그래피</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>사랑･이별</TableText>
//               </TableGap>
//               <TableGap>
//                 <TableText>감성 에세이</TableText>
//               </TableGap>
//             </tr>
//           </table>
//         </TableWrapper>
//       </KeywordGap>
//     </BrunchGap>
//   );
// };

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

// 테이블 스타일 정의
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

// 테이블 행 스타일 정의
const TableRow = styled.div`
  position: relative;
  display: flex;
`;

// 테이블 셀 스타일 정의
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

// const BrunchWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 7px;
//   align-items: center;
// `;

// const BrunchGap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 36px;
//   align-items: center;
//   justify-content: center;
//   margin-top: 54.3rem;
// `;

// const KeywordGap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   align-items: flex-end;
// `;

// const KeywordWrapper = styled.div`
//   display: flex;
//   gap: 7px;
//   align-items: center;
// `;

// const BrunchHeader = styled.div`
//   color: var(--gray10, #3d3d3d);
//   text-align: center;
//   ${({ theme }) => theme.font.head6};
// `;

// const BrunchHeadBelow = styled.div`
//   color: var(--gray08, #909090);
//   text-align: center;
//   ${({ theme }) => theme.font.detail4_3};
// `;

// const Rectanguler = styled.span`
//   width: 10px;
//   height: 10px;

//   background: var(--mint01, #00c6be);
//   border: 1px solid var(--mint01, #00c6be);
// `;

// const SelectKeyword = styled.span`
//   color: var(--mint01, #00c6be);

//   ${({ theme }) => theme.font.detail3_12};
// `;

// const TableWrapper = styled.div`
//   width: 689px;
//   height: 255px;
// `;

// const TableText = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;

//   color: var(--gray09, #666);
//   text-align: center;

//   ${({ theme }) => theme.font.detail2};
// `;

// const TableGap = styled.td`
//   gap: 8px;
//   align-items: center;
//   justify-content: center;
//   width: 8.7rem;
//   height: 8.5rem;
//   padding: 2rem 0.8rem;

//   border: 1px solid #eee;
// `;
