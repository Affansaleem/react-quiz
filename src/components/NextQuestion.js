function NextQuestion({ dispatch, answer, numQuestions, index }) {
  const hasAnswered = answer !== null;
  if (answer === null) return null;
  else if (index < numQuestions - 1) {
    return (
      hasAnswered && (
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "nextQuestion" });
          }}
        >
          Next
        </button>
      )
    );
  } else if (index === numQuestions - 1) {
    return (
      hasAnswered && (
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "finished" });
          }}
        >
          Finish
        </button>
      )
    );
  }
}

export default NextQuestion;
