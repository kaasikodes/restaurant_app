import { Button, Divider } from 'antd';
import PersonalityResult from 'components/result/ResultSummary';
import QuestionList from 'components/question/QuestionList';

import { pRoutes } from 'data/routes';

import useFetchQuestions from 'hooks/useFetchQuestions/useFetchQuestions';
// test 4 error , loading , n success status
const Result = () => {
  const { data, reqState } = useFetchQuestions();
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
      <Divider />

      {/* The Questions and their ansers */}
      <QuestionList data={data?.questions ?? []} />
      <Divider />

      <div className="flex justify-center">
        <Button href={pRoutes.index}>Restart</Button>
      </div>
    </div>
  );
};

// does it display a list of questions as disabled forms
// Does it provide a link to go back home
// Does it render the Personality result with appropriate text

export default Result;
