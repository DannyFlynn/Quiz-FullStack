function ScoreBoard({ score, restart, wrongQuestions }) {
  return (
    <div>
      <p>ScoreBoard: {score} / 4</p>
      {wrongQuestions.length > 0 ? (
        <p>Failed questions:</p>
      ) : (
        <p>Well done quizzer!!!</p>
      )}
      {wrongQuestions.map((questions, id) => (
        <div key={id}>
          <p>
            {id + 1}. {questions}
          </p>
        </div>
      ))}

      <button onClick={restart}>Reset</button>
    </div>
  );
}

export default ScoreBoard;
