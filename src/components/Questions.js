import Options from "./Options";
import Progress from "./Progress";
function Questions({
  questions,
  dispatch,
  answer,
  numQuestions,
  index,
  points,
  totalPoints,
}) {
  return (
    <>
      <Progress
        numQuestions={numQuestions}
        index={index}
        points={points}
        totalPoints={totalPoints}
      />
      <div>
        <h4>{questions.question}</h4>
        <Options questions={questions} dispatch={dispatch} answer={answer} />
      </div>
    </>
  );
}

export default Questions;
