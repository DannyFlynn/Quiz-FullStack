import { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "./Loading";
import Answers from "./Answers";
import ScoreBoard from "./ScoreBoard";

function TopicChosen({ topic, restart }) {
  //loader while fetching data :)
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  //increment question when client picks an answer
  const [count, setCount] = useState(0);
  //when  all questions are answered
  const [componentChange, setComponentChange] = useState([]);

  const [wrongQuestions, setWrongQuestions] = useState([]);

  const [score, setScore] = useState(4);

  useEffect(() => {
    Axios.post("http://localhost:3001/api/quiz", { topic: topic }).then(
      async (response) => {
        if (response.status === 201) {
          const quizObject = await response.data.category;
          setQuestions(quizObject.questions);
          setAnswers(quizObject.answers);
          setLoading(true);
        }
      }
    );
  }, []);

  //when a user makes a choice out of the answers
  const answerSelected = (correct) => {
    if (correct === answers[count].correct) {
      count === 3 ? setCount(count) : setCount((count) => count + 1);
      const correct = 1;
      setComponentChange((prev) => [...prev, correct]);
    } else {
      //wrong answers
      count === 3 ? setCount(count) : setCount((count) => count + 1);
      const wrong = 0;
      setComponentChange((prev) => [...prev, wrong]);
      setScore((prev) => prev - 1);
      setWrongQuestions((prev) => [...prev, questions[count].question]);
    }
  };

  return (
    <div className="quiz-game">
      {loading ? (
        <div className={componentChange.length < 4 ? "questions" : "d-none"}>
          <h4 className="question">{questions[count].question}</h4>
          <Answers
            count={count}
            answers={answers}
            answerSelected={answerSelected}
          />
        </div>
      ) : (
        <Loading />
      )}
      {/*after all questions have been answered this will take effect*/}
      {componentChange.length === 4 ? (
        <ScoreBoard
          score={score}
          restart={restart}
          wrongQuestions={wrongQuestions}
        />
      ) : null}
    </div>
  );
}

export default TopicChosen;
