import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { TChoice } from 'model/choice';

const Wrapper = styled.div`
  width: 100%;
`;

const Box = styled.button<{ isSelected: boolean }>`
  ${({
    isSelected,
    theme: {
      colors: { primary },
    },
  }) =>
    `
      width: 100%;
      line-height: 5em;
      font-size: 1.4rem;
      font-weight: 700;
      border: 2px solid ${primary};
      color: ${isSelected ? 'white' : primary};
      background-color: ${isSelected ? primary : 'white'};
      border-radius: 1.5rem;

      transition: color 0.2s, background-color 0.2s;
      &:hover {
        color: white;
        background-color: ${primary};
      }
    `}
`;

const Point = styled.p`
  color: gray;
  text-align: center;
`;

type Props = TChoice & {
  isSelected: boolean;
  onChoose: Dispatch<TChoice>;
};

const Choice: React.FC<Props> = ({ no, text, point, onChoose, isSelected }) => {
  const handleClick = () => {
    onChoose({ no, text, point });
  };
  return (
    <Wrapper>
      <Box isSelected={isSelected} onClick={handleClick}>
        {text}
      </Box>
      <Point>{point}점</Point>
    </Wrapper>
  );
};

export default Choice;
