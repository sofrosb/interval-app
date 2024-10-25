import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import useTimer from "easytimer-react-hook";
import Loading from "./pages/Loading";
import SetTimer from "./pages/SetTimer";
import AnalogTimer from "./pages/AnalogTimer";
import DigitalTimer from "./pages/DigitalTimer";
import TextTimer from "./pages/TextTimer";
import Alarm from "./pages/Alarm";
import Pause from "./pages/Pause";

function App() {
  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(10);
  const [pause, setPause] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [interval, setInterval] = useState(false);
  const [timerPath, setTimerPath] = useState("/analog-timer"); // om ingen timer väljs, skickas till analog timer
  const navigate = useNavigate();
  const location = useLocation();

  const startTimer = () => {
    timer.start({
      countdown: true,
      startValues: { minutes: isPaused ? 5 : duration }, // om isPaused är true, 5 minuters starttid. om isPaused är falsk, kör duration
    });
    setIsRunning(true);
  };

  const stopTimer = (pause) => {
    timer.stop();
    if (!pause) {
      setIsRunning(false);
    }
    setIsPaused(false);
  };

  useEffect(() => {
    if (isTargetAchieved && !interval) {
      setIsRunning(false);
      navigate("/alarm");
    }
    if (isTargetAchieved && interval) {
      if (pause) {
        setIsPaused(!isPaused);
      } else {
        startTimer();
      }
    }
  }, [isTargetAchieved]);

  useEffect(() => {
    if (isRunning) {
      if (isPaused) {
        navigate("/pause");
      } else {
        navigate(timerPath);
      }
      startTimer();
    }
  }, [isPaused]);

  useEffect(() => {
    if (isRunning) {
      navigate(timerPath);
    }
  }, [timerPath]);

  return (
    <>
      <section className="app-container">
        {!isPaused &&
          location.pathname != "/" &&
          location.pathname != "/alarm" && <Menu setTimerPath={setTimerPath} />}
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route
              path="/set-timer"
              element={
                <SetTimer
                  startTimer={startTimer}
                  duration={duration}
                  setDuration={setDuration}
                  pause={pause}
                  setPause={setPause}
                  interval={interval}
                  setInterval={setInterval}
                  timerPath={timerPath}
                />
              }
            />
            <Route
              path="/analog-timer"
              element={<AnalogTimer timer={timer} stopTimer={stopTimer} />}
            />
            <Route
              path="/digital-timer"
              element={<DigitalTimer timer={timer} stopTimer={stopTimer} />}
            />
            <Route
              path="/text-timer"
              element={<TextTimer timer={timer} stopTimer={stopTimer} />}
            />
            <Route path="/alarm" element={<Alarm />} />
            <Route
              path="/pause"
              element={
                <Pause
                  timer={timer}
                  startTimer={startTimer}
                  stopTimer={stopTimer}
                  isPaused={isPaused}
                  setIsPaused={setIsPaused}
                  timerPath={timerPath}
                />
              }
            />
          </Routes>
        </section>
      </section>
    </>
  );
}

export default App;
