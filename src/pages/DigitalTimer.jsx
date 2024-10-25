import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DigitalTimer = ({ timer, stopTimer }) => {
  const navigate = useNavigate();

  return (
    <section className="timer-content">
      <h2 className="digital-time">{`${timer.getTimeValues().minutes}:${
        timer.getTimeValues().seconds < 10 ? "0" : ""
      }${timer.getTimeValues().seconds}`}</h2>

      <button
        className="abort-button"
        onClick={() => {
          stopTimer();
          navigate("/set-timer");
        }}
      >
        Abort Timer
      </button>
    </section>
  );
};

export default DigitalTimer;
