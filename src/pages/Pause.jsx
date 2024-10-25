import { motion } from "framer-motion";

const Pause = ({ timer, stopTimer, setIsPaused }) => {
  const minutes = timer.getTimeValues().minutes;
  const seconds = timer.getTimeValues().seconds;

  return (
    <section className="main-content">
      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="12" height="50" rx="6" fill="#d0e7d2" />
        <rect x="28" width="12" height="50" rx="6" fill="#d0e7d2" />
      </svg>

      <br></br>
      <div>
        <h1>Pause & breath</h1>
        <br></br>
        <h2 className="digital-time">
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </h2>
      </div>
      <button
        className="abort-button"
        onClick={() => {
          stopTimer(true);
          setIsPaused(false);
        }}
      >
        No Pause, Go Now!
      </button>
    </section>
  );
};

export default Pause;
