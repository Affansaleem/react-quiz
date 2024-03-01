function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((options, index) => (
        <button
          className={`btn btn-option ${
            hasAnswered &&
            (index === questions.correctOption ? "correct" : "wrong")
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payLoad: index });
          }}
          key={options}
          disabled={hasAnswered}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
