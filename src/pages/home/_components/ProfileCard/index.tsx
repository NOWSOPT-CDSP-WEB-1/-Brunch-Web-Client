import styled from '@emotion/styled';

import { ProfileCardProps } from '../MainWriter/config';

const index = ({ memberData }: { memberData: ProfileCardProps }) => {
  const { name, part, description, tags, imgUrl } = memberData;
  return (
    <WrapperCard>
      <WrapperImg>
        <div>
          <Img src={imgUrl} alt="profile"></Img>
        </div>
        <WrapperWriter>
          <div>
            <Writer>{name}</Writer>
          </div>
          <div>
            <Job>{part}</Job>
          </div>
        </WrapperWriter>
        <WrapperContent>
          <Text>{description}</Text>
          <WrapperCategory>
            {tags.map((tag, index) => (
              <CategoryButton key={`profile-tag-${index}`}>
                <Category>{tag}</Category>
              </CategoryButton>
            ))}
          </WrapperCategory>
        </WrapperContent>
      </WrapperImg>
    </WrapperCard>
  );
};

export default index;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22.4rem;
  height: 27.2rem;
  padding: 3.2rem 2.5rem 3.5rem;

  background: ${({ theme }) => theme.color.white01};
`;

const Writer = styled.div`
  color: ${({ theme }) => theme.color.gray10};

  ${({ theme }) => theme.font.head5};
`;

const Job = styled.div`
  color: ${({ theme }) => theme.color.gray07};

  ${({ theme }) => theme.font.detail5};
`;

const WrapperWriter = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`;
const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 17.3rem;
  height: 20.5rem;
`;

const Img = styled.img`
  width: 5.8rem;
  height: 5.8rem;
  object-fit: cover;

  border-radius: 50%;
`;

const WrapperContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 17.3rem;

  color: ${({ theme }) => theme.color.gray06};
  ${({ theme }) => theme.font.detail4_183_0};
`;

const Category = styled.div`
  color: ${({ theme }) => theme.color.gray07};
  ${({ theme }) => theme.font.detail2};
`;

const CategoryButton = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  height: 2.1rem;
  padding: 0.8rem 0.6rem;

  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 3rem;
`;

const WrapperCategory = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
`;
