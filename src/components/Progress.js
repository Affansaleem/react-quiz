function Progress({ index, numQuestions, points, totalPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1}></progress>
      <p>
        Question{" "}
        <strong>
          {" "}
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        Points:{" "}
        <strong>
          {points} / {totalPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
