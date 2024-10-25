import { useNavigate } from "react-router-dom";

// Funktion som översätter siffror till ord
const numberToWords = (num) => {
  const units = [
    "",
    "EN",
    "TVÅ",
    "TRE",
    "FYRA",
    "FEM",
    "SEX",
    "SJU",
    "ÅTTA",
    "NIO",
  ];
  const teens = [
    "TIO",
    "ELVA",
    "TOLV",
    "TRETTON",
    "FJORTON",
    "FEMTON",
    "SEXTON",
    "SJUTTON",
    "ARTON",
    "NITTON",
  ];
  const tens = [
    "",
    "",
    "TJUGO",
    "TRETTIO",
    "FYRTIO",
    "FEMTIO",
    "SEXTIO",
    "SJUTTIO",
    "ÅTTIO",
    "NITTIO",
  ];

  if (num < 10) return units[num];
  if (num < 20) return teens[num - 10];

  const unit = num % 10;
  const ten = Math.floor(num / 10);

  // Slå samman tiotal och enheter
  return `${tens[ten]}${units[unit]}`.trim();
};

const TextTimer = ({ timer, stopTimer }) => {
  console.log(timer.getTimeValues());
  const minutes = timer.getTimeValues().minutes;
  const seconds = timer.getTimeValues().seconds;
  const navigate = useNavigate();

  // Bestäm om det ska vara "MINUT" eller "MINUTER"/"SEKUND", "SEKUNDER" eller 0
  const minuteText =
    minutes === 0 ? "0 MINUTER" : minutes === 1 ? "MINUT" : "MINUTER";
  const secondText = seconds === 0 ? "" : seconds === 1 ? "SEKUND" : "SEKUNDER";

  return (
    <div className="timer-content">
      <p className="text-time">
        {`${numberToWords(minutes)} ${minuteText} OCH ${numberToWords(
          seconds
        )} ${secondText} KVAR`}
      </p>
      <button
        className="abort-button"
        onClick={() => {
          stopTimer();
          navigate("/set-timer");
        }}
      >
        Abort Timer
      </button>
    </div>
  );
};

export default TextTimer;
