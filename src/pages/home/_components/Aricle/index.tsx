import styled from '@emotion/styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

interface ArticleImage {
  id: number;
  title: string;
  authorName: string;
  imageUrl: string;
  content: string;
}

const index = () => {
  const [groupedImages, setGroupedImages] = useState<ArticleImage[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://www.sopt-brunch.p-e.kr/api/v1/postings/recommended');

        const data = response.data.data.recommendedPostings;

        const BigGroupedImages = [];
        for (let i = 0; i < data.length; i += 4) {
          BigGroupedImages.push(data.slice(i, i + 4));
        }

        setGroupedImages(BigGroupedImages);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <BBigWrapperCard>
      <WrapperArticle>
        <WrapperHeader>
          <HeaderText>RECOMMENDED ARTICLES</HeaderText>
          <HeaderText2>브런치의 다양한 글을 만나보세요.</HeaderText2>
        </WrapperHeader>
        <Swiper slidesPerView={2} centeredSlides={true} navigation modules={[Navigation]} className="article-swiper">
          {groupedImages.map((group, index) => (
            <WrapperSwiperSlide key={index}>
              {group.map((article) => (
                <BigWrapperCard key={article.id}>
                  <WrapperCard>
                    <WrapperContent>
                      <Img src={article.imageUrl} alt={`Article ${article.id}`} />
                      <Gap>
                        <WrapperText>
                          <Text>{article.title}</Text>
                        </WrapperText>
                        <Content>{article.content}</Content>
                      </Gap>
                    </WrapperContent>
                    <WrapperWriter>
                      <By>by</By>
                      <Writer>{article.authorName}</Writer>
                    </WrapperWriter>
                  </WrapperCard>
                </BigWrapperCard>
              ))}
            </WrapperSwiperSlide>
          ))}
        </Swiper>
      </WrapperArticle>
    </BBigWrapperCard>
  );
};

export default index;

const WrapperSwiperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const HeaderText = styled.div`
  color: ${({ theme }) => theme.color.gray10};
  text-align: center;
  ${({ theme }) => theme.font.head6};
`;

const HeaderText2 = styled.div`
  color: ${({ theme }) => theme.color.gray08};
  text-align: center;
  ${({ theme }) => theme.font.detail4_3};
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 100%;
  height: 8.7rem;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail1};
`;

const WrapperText = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.color.gray06};
  ${({ theme }) => theme.font.detail4_183_0};
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  align-items: flex-start;
`;

const By = styled.div`
  color: ${({ theme }) => theme.color.gray05};
  ${({ theme }) => theme.font.caption2};
`;

const Writer = styled.div`
  color: var(--gray05, #c9c9c9);
  ${({ theme }) => theme.font.detail4_3};
`;

const WrapperWriter = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-start;
`;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

const BigWrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 17.3rem;
  height: 43rem;
`;

const BBigWrapperCard = styled.section`
  position: relative;
  left: -33.9rem;
  display: inline-flex;
  gap: 1.2rem;
  align-items: flex-start;
  width: 136.6rem;
  margin-bottom: 12rem;
`;

const WrapperArticle = styled.div`
  width: 100%;
  width: 136.6rem;
  height: auto;

  .swiper-wrapper {
    gap: 1.2rem;
    margin-top: 2.9rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: none;
  }

  .swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev {
    width: 7.2rem;
    height: 7.2rem;

    background: url('/icon/arrow-left.svg') no-repeat center center;
    background-color: ${({ theme }) => theme.color.white01};
    opacity: 0.56;
    border-radius: 50%;
  }

  .swiper-button-next {
    width: 7.2rem;
    height: 7.2rem;

    background: url('/icon/arrow-right.svg') no-repeat center center;
    background-color: ${({ theme }) => theme.color.white01};
    opacity: 0.56;
    border-radius: 50%;
  }
`;
