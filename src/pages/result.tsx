import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Point = styled.p`
  font-size: 64px;
  color: ${(props) => props.theme.colors.primary};
`;

const Result = () => {
  const router = useRouter();

  const { point = 0 } = router.query;

  return (
    <Wrapper>
      <div>
        <h1>당신의 점수는</h1>
        <Point>{point}점</Point>
        <h1>입니다.</h1>
      </div>
    </Wrapper>
  );
};

export default Result;
