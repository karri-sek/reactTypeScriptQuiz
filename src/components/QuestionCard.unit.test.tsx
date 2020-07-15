import React from "react";
import { shallow } from 'enzyme';
import QuestionCard from './QuestionCard';

describe('QuestionCard', () => {
  it('Renders Question ', () => {
    const questionCard = shallow(<QuestionCard
      questionNr={1}
      totalQuestions={10}
      question={'sample Question'}
      answers={['here is the answer']}
      userAnswer={undefined}
      callback={() => { }}
    />);
    expect(questionCard).toMatchSnapshot();
  });
});