import React, { Dispatch } from 'react';
import styled from 'styled-components';
import Choice from 'components/Choice';
import type { TQuestion } from 'model/question';
import { TChoice } from 'model/choice';

const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;
const Choices = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 0;
`;

type Props = TQuestion & {
  selected: TChoice | null;
  onChoose: Dispatch<{ no: TQuestion['no']; choice: TChoice }>;
};

const Question: React.FC<Props> = ({
  no,
  title,
  choices,
  onChoose,
  selected,
}) => {
  const handleChoose = (choice: TChoice) => {
    onChoose({ no, choice });
  };

  return (
    <>
      <Title>
        Q{no}.{title}
      </Title>
      <Choices>
        {choices.map((choice) => (
          <div style={{ width: `${100 / choices.length}%`, margin: '0 2rem' }}>
            <Choice
              key={choice.text}
              {...choice}
              onChoose={handleChoose}
              isSelected={selected?.no === choice.no}
            />
          </div>
        ))}
      </Choices>
    </>
  );
};

export default Question;
