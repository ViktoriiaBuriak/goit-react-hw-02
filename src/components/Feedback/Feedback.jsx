import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      <span className={css.feedbackText}>Good:{feedback.good}</span>
      <span className={css.feedbackText}>Neutral:{feedback.neutral}</span>
      <span className={css.feedbackText}>Bad:{feedback.bad}</span>
      <span className={css.feedbackText}>Total:{totalFeedback}</span>
      <span className={css.feedbackText}>Positive:{positiveFeedback}%</span>
    </div>
  );
};

export default Feedback;
