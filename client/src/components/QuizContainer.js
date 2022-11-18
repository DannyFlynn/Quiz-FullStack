import Welcome from "./Welcome";
import TopicContainer from "./TopicContainer";
import TopicChosen from "./TopicChosen";
import { useState } from "react";

function QuizContainer() {
  //Map through the topic to generate four topics for the user to select
  const [topics, setTopics] = useState([
    { id: 1, Topic: "Boxing", difficulty: "Difficulty: Super-Easy" },
    { id: 2, Topic: "Cooking", difficulty: "Difficulty: Easy" },
    { id: 3, Topic: "History", difficulty: "Difficulty: Medium" },
    { id: 4, Topic: "Music", difficulty: "Difficulty: Hard" },
  ]);

  //on gamestart welcome and topic selection will be removed and the game actually starts
  const [gameStart, setGameStart] = useState(false);

  //chosen topic
  const [topic, setTopic] = useState("");

  const topicSelected = (action) => {
    setGameStart(true);
    setTopic(action);
  };

  //restart the whole game
  const restart = () => {
    setGameStart(false);
  };

  return (
    <div className="quiz-Container">
      {gameStart === false ? (
        <Welcome />
      ) : (
        <TopicChosen topic={topic} restart={restart} />
      )}
      {gameStart === false ? (
        <TopicContainer topics={topics} topicSelected={topicSelected} />
      ) : null}
    </div>
  );
}

export default QuizContainer;
