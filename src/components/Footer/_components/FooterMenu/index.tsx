import styled from '@emotion/styled';

interface menuListType {
  menuList: string[];
}

const index = ({ menuList }: menuListType) => {
  return (
    <MenuWrapper>
      {menuList.map((menu, index) => (
        <Menu key={index}>{menu}</Menu>
      ))}
    </MenuWrapper>
  );
};

export default index;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`;

const Menu = styled.div`
  ${({ theme }) => theme.font.detail4_183_0};
  color: ${({ theme }) => theme.color.gray05};

  cursor: pointer;
`;
