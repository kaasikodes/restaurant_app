import QuestionsContainer from 'components/question/QuestionsContainer';

const Assessment = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* landing screen */}
      {/* start personality test */}
      {/* personality test page */}
      <h4 className="text-2xl text-center">
        Are you are an introvert or extrovert?
      </h4>
      <QuestionsContainer />
    </div>
  );
};
// Does the comp display text
// Does the Assessment render a single question via the question container

export default Assessment;
