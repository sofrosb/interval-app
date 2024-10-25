import { useNavigate } from "react-router-dom";
import "./SetTimer.css";

const SetTimer = ({
  startTimer,
  setDuration,
  duration,
  interval,
  pause,
  setInterval,
  setPause,
  timerPath,
}) => {
  const navigate = useNavigate();

  const handleIncrement = () => {
    setDuration((prevMinutes) => {
      if (prevMinutes < 60) {
        return prevMinutes + 1;
      }
      return prevMinutes;
    });
  };

  const handleDecrement = () => {
    setDuration((prevMinutes) => (prevMinutes > 1 ? prevMinutes - 1 : 1));
  };

  return (
    <section className="set-timer-container">
      <article className="time-setting">
        <button className="time-button" onClick={handleDecrement}>
          {"<"}
        </button>
        <span className="minutes">{duration} min</span>
        <button className="time-button" onClick={handleIncrement}>
          {">"}
        </button>
      </article>
      <article className="checkbox-container">
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            checked={interval}
            onChange={() => setInterval(!interval)}
          />
          <div className="new-checkbox"></div>
          intervals
        </label>
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            checked={pause}
            onChange={() => setPause(!pause)}
            disabled={!interval}
          />
          <div className="new-checkbox"></div>5 minute break / interval
        </label>
      </article>
      <button
        className="start-button"
        onClick={() => {
          startTimer();
          navigate(timerPath);
        }}
      >
        Start Timer
      </button>
    </section>
  );
};

export default SetTimer;
