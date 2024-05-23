import { Icon } from '@components';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import axios from 'axios';
import BlackLike from 'public/icon/black_heart.svg?react';
import Like from 'public/icon/heart.svg?react';
import Volume from 'public/icon/volume.svg?react';
import { useEffect, useState } from 'react';

export interface BookDetailProps {
  id: number;
  title: string;
  bookImage: string;
  authorName: string;
  authorDescription: string;
  job: string;
  subscriber: number;
  episode: number;
  requiredTime: number;
  isLiked: boolean;
  likeCount: number;
  recommendation: string;
  bookDescription: string;
  tag: string;
}

const BookInfo = ({
  id,
  title,
  bookImage,
  authorName,
  authorDescription,
  job,
  subscriber,
  episode,
  requiredTime,
  isLiked,
  likeCount,
  recommendation,
  bookDescription,
  tag,
}: BookDetailProps) => {
  const [isShadowApplied, setIsShadowApplied] = useState(false);
  const [isLike, setIsLike] = useState(isLiked);
  const [likeCnt, setLikeCnt] = useState(likeCount);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShadowApplied(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleLike = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/books/${id}/likes`);

      if (data.success) {
        setIsLike((prev) => {
          prev ? setLikeCnt(likeCnt - 1) : setLikeCnt(likeCnt + 1);
          return !prev;
        });
      }
    } catch (error) {
      console.error('네트워크 에러가 발생했습니다.', error);
    }
  };

  return (
    <Container $isShadowApplied={isShadowApplied}>
      <Wrapper>
        <TitleWrapper>
          <TitleBox>
            <Title>{title}</Title>

            <TitleInfoBox>
              <RowBox>
                <Volume />
                <RequiredTime>총 {episode}화</RequiredTime>
              </RowBox>

              <RowBox>
                <Icon icon={icons.clock} size={'1rem'} />
                <RequiredTime>{requiredTime}분</RequiredTime>
              </RowBox>
            </TitleInfoBox>
          </TitleBox>

          <LikeWrapper>
            <LikeBox onClick={handleLike}>{isLike ? <LikeIconBlack /> : <LikeIcon $isLiked={isLike} />}</LikeBox>

            <LikeCnt>{likeCnt}</LikeCnt>
          </LikeWrapper>
        </TitleWrapper>

        <RecommendBox>
          <RecommedLabel>이런 분들께 추천 드려요!</RecommedLabel>
          <RecommendText>{recommendation}</RecommendText>
        </RecommendBox>
      </Wrapper>

      <Wrapper>
        <BookDescriptionTitle>브런치 북 소개</BookDescriptionTitle>
        <BookDescription>{bookDescription}</BookDescription>

        <TagWrapper>
          {tag.split(', ').map((tag: string, i: number) => (
            <Tag key={`tag-${i}`}>{tag.trim()}</Tag>
          ))}
        </TagWrapper>
      </Wrapper>

      <AuthorWrapper>
        <BookSmallImg src={bookImage} alt="" />

        <AuthorInfoWrapper>
          <AuthorName>{authorName}</AuthorName>
          <Job>{job}</Job>

          <AuthorDescription>{authorDescription}</AuthorDescription>

          <SubscribeBox>
            <Subscriber>{subscriber.toLocaleString()}명</Subscriber>
            <SubscribeBtn>구독하기</SubscribeBtn>
          </SubscribeBox>
        </AuthorInfoWrapper>
      </AuthorWrapper>

      <BookCover>
        <img src={bookImage} alt="" width={'107px'} />
        <BuyBtn>이 책 구매하기</BuyBtn>
      </BookCover>
    </Container>
  );
};

export default BookInfo;

const slideIn = (count: number) => keyframes`
  0% {
    transform: translateX(-${count}* 100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div<{ $isShadowApplied: boolean }>`
  display: flex;
  box-shadow: ${({ $isShadowApplied }) => ($isShadowApplied ? '0px 0px 14px 0px rgba(0, 0, 0, 0.15)' : '')};
`;

const Wrapper = styled.div`
  display: flex;
  width: 23.3rem;
  height: 32rem;
  padding: 19px 20px;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.color.gray02};
  position: relative;

  &:nth-child(2) {
    transform: translateX(-100%);
    animation: ${slideIn(1)} 0.5s ease-in-out forwards;

    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    transform: translateX(-200%);
    animation: ${slideIn(2)} 0.5s ease-in-out forwards;

    animation-delay: 0.5s;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.gray09};
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 136.241%; /* 24.523px */
  letter-spacing: 0.54px;
`;

const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const TitleInfoBox = styled.div`
  display: flex;
  gap: 11px;
`;

const RequiredTime = styled.span`
  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail4_3};
`;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  height: 4.1rem;
`;

const LikeBox = styled.button`
  display: flex;
  padding: 5px 3px;

  border-radius: 30px;
  border: 0.5px solid ${({ theme }) => theme.color.gray07};
`;

const LikeIcon = styled(Like)<{ $isLiked: boolean }>`
  path {
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.color.gray11};
  }
`;

const LikeIconBlack = styled(BlackLike)``;

const LikeCnt = styled.span`
  color: ${({ theme }) => theme.color.gray09};

  ${({ theme }) => theme.font.detail4_3};
`;

const RecommendBox = styled.div``;

const RecommedLabel = styled.p`
  color: ${({ theme }) => theme.color.gray11};

  ${({ theme }) => theme.font.detail2};
  margin-bottom: 5px;
`;

const RecommendText = styled.p`
  color: ${({ theme }) => theme.color.gray08};

  ${({ theme }) => theme.font.detail4_183_0};
`;

const BookDescriptionTitle = styled.div`
  color: ${({ theme }) => theme.color.gray11};

  ${({ theme }) => theme.font.detail4_3};
`;

const BookDescription = styled.div`
  color: ${({ theme }) => theme.color.gray08};

  ${({ theme }) => theme.font.detail4_183_0};
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div`
  padding: 4px 7px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray05};

  color: ${({ theme }) => theme.color.gray05};

  ${({ theme }) => theme.font.detail4_3};
`;

const BookCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 23.3rem;
  height: 32rem;
  padding: 6.3rem;
  gap: 12px;

  background: ${({ theme }) => theme.color.gray07};

  transform: translateX(-300%);
  animation: ${slideIn(3)} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;
`;

const BuyBtn = styled.button`
  width: 8.3rem;
  height: 23px;
  padding: 4px 6px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.gray02};

  color: ${({ theme }) => theme.color.gray02};
  text-align: center;
  ${({ theme }) => theme.font.detail2};
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  transform: translateX(-200%);
  animation: ${slideIn(2)} 0.5s ease-in-out forwards;

  animation-delay: 0.5s;
`;

const BookSmallImg = styled.img`
  width: 23.3rem;
  height: 7rem;
  object-fit: cover;
`;

const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px 21px 0;
`;

const AuthorName = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.gray11};

  ${({ theme }) => theme.font.body4_regular};
`;

const AuthorDescription = styled.p`
  width: 19.1rem;
  color: ${({ theme }) => theme.color.gray10};

  ${({ theme }) => theme.font.detail4_183_0};
`;

const Job = styled.p`
  color: ${({ theme }) => theme.color.gray07};
  ${({ theme }) => theme.font.detail4_3};
`;

const SubscribeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subscriber = styled.span`
  color: ${({ theme }) => theme.color.gray11};
  ${({ theme }) => theme.font.detail4_3};
`;

const SubscribeBtn = styled.button`
  height: 2.3rem;
  padding: 5px 13px;

  color: ${({ theme }) => theme.color.mint01};

  ${({ theme }) => theme.font.detail2};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.mint01};

  background: ${({ theme }) => theme.color.white01};
`;
