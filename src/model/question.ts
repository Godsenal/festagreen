import { TChoice } from 'model/choice';

export type TQuestion = {
  no: number;
  title: string;
  choices: TChoice[];
};
