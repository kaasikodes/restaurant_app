import { Button } from 'antd';
import PersonalityResult from 'components/PersonalityResult';
import QuestionList from 'components/QuestionList';
import React from 'react';
import useFetchQuestions from 'services/hooks/useFetchQuestions';

const PersonalityResultPage = () => {
  const { data, reqState } = useFetchQuestions({});
  const questionCount = data?.total;
  const totalIntrovertScore = data?.questions.reduce(
    (a, b) =>
      a + (b.choosenOption ? b.choosenOption?.answer?.introvertValue : 0),
    0
  );
  const totalExtrovertScore = data?.questions.reduce(
    (a, b) =>
      a + (b.choosenOption ? b.choosenOption?.answer?.extrovertValue : 0),
    0
  );
  console.log(
    data,
    'ALL',
    questionCount,
    '...',
    totalExtrovertScore,
    totalIntrovertScore
  );

  return (
    <div className="flex flex-col gap-4">
      <PersonalityResult
        extroVal={totalExtrovertScore ?? 0}
        introVal={totalIntrovertScore ?? 0}
      />
      {/* The Questions and their ansers */}

      <div>
        <Button href="/personality/home">Restart</Button>
      </div>
    </div>
  );
};

export default PersonalityResultPage;
