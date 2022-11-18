import React from "react";
function TopicContainer({ topics, topicSelected }) {
  return (
    <div className="topic-container">
      {topics.map((selected) => (
        <div
          key={selected.id}
          className="topics"
          onClick={() => topicSelected(selected.Topic)}
        >
          <p>{selected.Topic}</p>
          <p>{selected.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicContainer;
