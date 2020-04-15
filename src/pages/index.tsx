import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TQuestion } from 'model/question';
import Question from 'components/Question';
import { TChoice } from 'model/choice';

const Page = styled.div`
  max-width: 768px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Submit = styled.div`
  text-align: center;
  button {
    ${({
      theme: {
        colors: { primary },
      },
    }) =>
      `
      font-size: 1.2rem;
      font-weight: 700;
      min-width: 150px;
      line-height: 3rem;
      border: 1px solid ${primary};
      color: ${primary};
      background-color: white;

      transition: color 0.2s, background-color 0.2s;

      &:hover {
        color: white;
        background-color: ${primary};
      }
    `}
  }
`;

const QUESTIONS: TQuestion[] = [
  {
    no: 1,
    title: '인쇄물 제작은 어떻게 진행하나요?',
    choices: [
      {
        no: 1,
        text: '일반 종이',
        point: 0,
      },
      {
        no: 2,
        text: '친환경종이',
        point: 5,
      },
      {
        no: 3,
        text: '온라인',
        point: 10,
      },
    ],
  },
];

type Selected = {
  [no: string]: TChoice | null;
};

const Home = () => {
  const [selected, setSelected] = useState<Selected>(() => {
    return QUESTIONS.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.no]: null,
      }),
      {},
    );
  });
  const router = useRouter();

  const handleChoose = ({
    no,
    choice,
  }: {
    no: TQuestion['no'];
    choice: TChoice;
  }) => {
    setSelected((prev) => ({
      ...prev,
      [no]: choice,
    }));
  };

  const handleSubmit = () => {
    const point = Object.values(selected).reduce(
      (acc, curr) => acc + (curr?.point || 0),
      0,
    );
    router.push({
      pathname: '/result',
      query: { point },
    });
  };

  return (
    <Page>
      <Header>
        <h1>축제 초록리스트</h1>
      </Header>
      {QUESTIONS.map((question) => (
        <Question
          key={question.no}
          selected={selected[question.no]}
          {...question}
          onChoose={handleChoose}
        />
      ))}
      <Submit>
        <button onClick={handleSubmit}>제출하기</button>
      </Submit>
    </Page>
  );
};

export default Home;
