import Description from "./Description/Description";
import "./App.css";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./Notification/Notification";

const App = () => {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackValue");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialFeedback;
    return parsedFeedback;
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
};

export default App;
