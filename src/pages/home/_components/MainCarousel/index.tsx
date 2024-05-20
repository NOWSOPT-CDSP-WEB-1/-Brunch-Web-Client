import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { data } from './config';
import { BannerImage } from './types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Index = () => {
  const groupedImages: BannerImage[][] = [];

  for (let i = 0; i < data.length; i += 2) {
    groupedImages.push(data.slice(i, i + 2));
  }

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + '</span>';
    },
  };
  return (
    <CarouselContainer>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        navigation
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className="my-swiper">
        {groupedImages.slice(0, 10).map((group, index) => {
          return (
            <SwiperSlideWrapper key={index}>
              {group.map((item) => {
                return (
                  <SlideWrapper key={item.id}>
                    <SlideImage src={item.bannerImage} alt={`Slide ${item.id}`} />
                    <SlideOverlay className="overlay">
                      <OverLayText>
                        <div>
                          <OverlayHeader>
                            <OverlayTitle>{item.title}</OverlayTitle>
                            <img src="icon/heart.svg" alt="like" />
                          </OverlayHeader>
                          <OverlayBookData>
                            <OverlayBookEpisode>
                              <Icon icon={icons.segment} size="1rem" />
                              <span>{`총 ${item.bookEpisode}화`}</span>
                            </OverlayBookEpisode>
                            <OverlayBookRuntime>
                              <Icon icon={icons.schedule} size="1rem" />
                              <span>{`${item.bookRuntime}분`}</span>
                            </OverlayBookRuntime>
                          </OverlayBookData>
                          <OverlayDescription>{item.bookDescription}</OverlayDescription>
                        </div>
                        <OverlayRecommendation>
                          <RecommendationTitle>이런분께 추천드려요!</RecommendationTitle>
                          <RecommendationContent>{item.bookRecommendation}</RecommendationContent>
                        </OverlayRecommendation>
                      </OverLayText>
                    </SlideOverlay>
                  </SlideWrapper>
                );
              })}
            </SwiperSlideWrapper>
          );
        })}
      </Swiper>
    </CarouselContainer>
  );
};

export default Index;

const CarouselContainer = styled.div`
  position: absolute;
  left: 0;
  gap: 1rem;
  width: 100%;
  max-width: 136.6rem;
  height: 43.7rem;

  .my-swiper {
    position: relative;
    padding-bottom: 3.6rem;

    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 0.8;
        height: 1rem;
        margin: 0.2rem 1.3rem 0.3rem 0.4rem;

        ${({ theme }) => theme.font.detail6}

        background-color: ${({ theme }) => theme.color.white01};
        border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
        border-radius: 0;
      }

      .swiper-pagination-bullet:last-of-type {
        margin-right: 0.4rem;
      }
    }
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

const SwiperSlideWrapper = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34.2rem;
  height: 37.1rem;

  background: linear-gradient(180deg, #f1f1f1 0%, #b9b9b9 71.99%, #d0d0d0 72%, #b7b7b7 100%);
`;

const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover .overlay {
    visibility: visible;
    opacity: 0.5;
  }
`;

const SlideImage = styled.img`
  width: 18.4rem;
  height: 25.6rem;
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.color.black};
  visibility: hidden;
  opacity: 0;

  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

const OverLayText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18.4rem;
  height: 25.6rem;
  padding: 1rem;
`;

const OverlayHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OverlayTitle = styled.h2`
  display: -webkit-box;
  max-width: 12.6rem;
  max-height: 7.5rem;
  overflow: hidden;

  ${({ theme }) => theme.font.body1}
  color: ${({ theme }) => theme.color.white01};
  font-size: 1.8rem;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  line-height: 136.241%;
  text-overflow: ellipsis;
`;

const OverlayBookData = styled.div`
  display: flex;
  gap: 1.1rem;
  padding-bottom: 1rem;

  & span {
    color: ${({ theme }) => theme.color.white01};
  }
`;

const OverlayBookEpisode = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;

  ${({ theme }) => theme.font.detail4_3}
  color: ${({ theme }) => theme.color.white01};

  & > span.material-symbols-outlined {
    transform: rotateY(180deg);
  }
`;

const OverlayBookRuntime = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;

  ${({ theme }) => theme.font.detail4_3}
  color: ${({ theme }) => theme.color.white01};
`;

const OverlayDescription = styled.div`
  display: -webkit-box;
  max-width: 15rem;
  height: 5.6em;
  overflow: hidden;

  ${({ theme }) => theme.font.detail2}
  color: ${({ theme }) => theme.color.white01};

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  text-overflow: ellipsis;
`;

const OverlayRecommendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecommendationTitle = styled.h6`
  ${({ theme }) => theme.font.detail2}
  color: ${({ theme }) => theme.color.white01};
`;

const RecommendationContent = styled.p`
  display: -webkit-box;
  max-width: 15rem;
  height: 3.2;
  overflow: hidden;

  ${({ theme }) => theme.font.detail4_183_0}
  color: ${({ theme }) => theme.color.white01};

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  text-overflow: ellipsis;
`;
