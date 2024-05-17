import styled from '@emotion/styled';

interface DisplayTextProps {
  color?: string;
  content: string;
}

const DisplayText = ({ color, content }: DisplayTextProps) => {
  return <DisplayTextWrapper color={color}>{content}</DisplayTextWrapper>;
};

export default DisplayText;

const DisplayTextWrapper = styled.pre`
  display: inline-block;

  ${({ theme }) => theme.font.display1};
  color: ${({ color, theme }) => (color ? color : theme.color.black)};
`;
