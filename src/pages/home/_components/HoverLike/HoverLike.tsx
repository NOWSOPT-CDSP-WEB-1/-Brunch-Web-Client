import { postLikeBook } from '@apis/books';
import styled from '@emotion/styled';
import { useState } from 'react';

interface HoverLikeProps {
  id: number;
  isLiked?: boolean;
}

const HoverLike = ({ id, isLiked = false }: HoverLikeProps) => {
  const [isLike, setIsLike] = useState(isLiked);

  const handleClickLike = async () => {
    if (!isLike) {
      // const response = await postLikeBook(id);
      await postLikeBook(id);
      setIsLike(true);
    }
  };

  return <Image src={isLike ? 'icon/heart-fill.svg' : 'icon/heart.svg'} onClick={handleClickLike} alt={'like'} />;
};

export default HoverLike;

const Image = styled.img`
  cursor: pointer;
`;
