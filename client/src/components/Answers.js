function Answers({ answers, count, answerSelected }) {
  return (
    <div className="answers">
      {answers[count].answer.map((choice, id) => (
        <div key={id} className="answer" onClick={() => answerSelected(choice)}>
          <p>{choice}</p>
        </div>
      ))}
    </div>
  );
}

export default Answers;
