function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = Math.ceil((points / totalPoints) * 100);
  return (
    <>
      <p className="result" style={{ padding: "20px" }}>
        <span>
          {"😀"}
          You scored <strong>{points}</strong> out of {totalPoints} with{" "}
          {percentage}%
        </span>
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
