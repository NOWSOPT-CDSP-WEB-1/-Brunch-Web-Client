import { Article } from '@components';
import styled from '@emotion/styled';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { data } from './config';
import { ArticleImage } from './types';

import 'swiper/css';
import 'swiper/css/navigation';

const index = () => {
  const groupedImages: ArticleImage[][] = [];

  for (let i = 0; i < data.length; i += 4) {
    groupedImages.push(data.slice(i, i + 4));
  }

  return (
    <section>
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
                        <Img src={article.articleImage} alt={`Article ${article.id}`} />
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
    </section>
  );
};

export default index;

const WrapperSwiperSlide = styled(SwiperSlide)`
  display: flex;
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
  align-items: center;
  gap: 0.7rem;
`;

const Img = styled.img`
  display: flex;
  width: 17.3rem;
  height: 8.7rem;
  padding: 0.8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail1};
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Content = styled.div`
  width: 17.3rem;
  color: ${({ theme }) => theme.color.gray06};
  ${({ theme }) => theme.font.detail4_183_0};
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9rem;
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
  align-items: flex-start;
  gap: 0.2rem;
`;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const BigWrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const BBigWrapperCard = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const WrapperArticle = styled.div`
  width: 100%;
  width: 136.6rem;
  height: auto;
  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev {
    background: url('/icon/arrow-left.svg') no-repeat center center;
  }

  .swiper-button-next {
    background: url('/icon/arrow-right.svg') no-repeat center center;
  }

  .swiper-button-disabled {
    opacity: 0.3;
  }
`;
