import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AnalogTimer = ({ timer, stopTimer }) => {
  const navigate = useNavigate();
  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;

  // Hantera visarens vinkel, 6 = 6 graders rotering
  const [handAngle, setHandAngle] = useState({
    seconds: seconds * 6,
    minutes: minutes * 6,
  });

  useEffect(() => {
    const secondAngle = handAngle.seconds - 6;
    const minuteAngle = handAngle.minutes;
    setHandAngle({ seconds: secondAngle, minutes: minuteAngle });
  }, [seconds]);

  useEffect(() => {
    const secondAngle = handAngle.seconds;
    const minuteAngle = handAngle.minutes;
    setHandAngle({ seconds: secondAngle, minutes: minuteAngle });
  }, [minutes]);

  return (
    <section className="main-content">
      <svg
        width="278"
        height="278"
        viewBox="0 0 278 278"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_839_0)">
          <path
            d="M139.169 11.158V0.89389"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M125.848 11.8468L124.78 1.64398"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M112.672 13.9288L110.551 3.89429"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M99.7856 17.3884L96.627 7.62946"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M87.3342 22.1722L83.1685 12.8036"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M75.4397 28.2419L70.3279 19.3555"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M64.2472 35.5209L58.2351 27.2239"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M53.8787 43.9403L47.035 36.3169"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M44.4409 53.3931L36.8419 46.5274"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M36.0409 63.7873L27.7628 57.7559"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M28.7699 75.0082L19.912 69.88"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M22.7044 86.9256L13.3582 82.7541"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M17.9131 99.417L8.18542 96.2482"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M14.4569 112.345L4.44696 110.209"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M12.3588 125.556L2.1886 124.484"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M11.6569 138.92H1.42566"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M12.3435 152.284L2.17334 153.355"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M14.4188 165.502L4.41644 167.638"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M17.8673 178.43L8.13965 181.599"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M22.6357 190.929L13.2972 195.1"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M28.6859 202.854L19.8281 207.982"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M35.9417 214.083L27.6713 220.114"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M44.3341 224.484L36.7351 231.35"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M53.7566 233.953L46.9129 241.584"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M64.1175 242.387L58.1055 250.684"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M75.3024 249.682L70.1906 258.568"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M87.1816 255.767L83.0235 265.135"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M99.633 260.566L96.4744 270.325"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M112.519 264.041L110.391 274.075"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M125.688 266.138L124.62 276.341"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M139.009 266.85V277.106"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M152.33 266.153L153.398 276.364"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M165.506 264.071L167.635 274.106"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M178.393 260.619L181.551 270.378"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M190.852 255.828L195.01 265.204"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M202.738 249.758L207.85 258.645"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M213.931 242.479L219.943 250.784"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M224.3 234.067L231.143 241.691"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M233.737 224.607L241.344 231.473"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M242.145 214.213L250.415 220.244"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M249.416 202.992L258.274 208.128"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M255.481 191.074L264.82 195.246"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M260.265 178.583L269.993 181.759"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M263.729 165.663L273.731 167.798"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M265.819 152.444L275.99 153.516"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M266.529 139.08H276.753"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M265.835 125.716L276.012 124.645"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M263.759 112.498L273.762 110.37"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M260.319 99.5701L270.046 96.4013"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M255.542 87.0787L264.889 82.8995"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M249.492 75.146L258.35 70.0178"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M242.237 63.9174L250.515 57.886"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M233.852 53.5156L241.451 46.6499"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M224.422 44.0475L231.265 36.424"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M214.061 35.6204L220.073 27.3157"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M202.876 28.3261L207.995 19.4397"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M190.997 22.2411L195.155 12.8648"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M178.545 17.4343L181.711 7.67538"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M165.667 13.967L167.795 3.9249"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M152.49 11.8622L153.559 1.6593"
            stroke="#d0e7d2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
        <ellipse
          cx="7.98555"
          cy="7.9858"
          rx="7.98555"
          ry="7.9858"
          transform="matrix(1 -7.0755e-09 0.00359053 0.999994 131 131)"
          fill="black"
        />
        <ellipse
          cx="4.98563"
          cy="4.98578"
          rx="4.98563"
          ry="4.98578"
          transform="matrix(1 -7.0755e-09 0.00359053 0.999994 134.011 134)"
          fill="#d0e7d2"
          z-index="99"
        />
        <motion.rect
          x="136.6"
          y="15.8"
          width="3.99278"
          height="125.223"
          rx="1.99639"
          initial={{
            rotate: `${handAngle.minutes}deg`,
            originX: "50%",
            originY: "50%",
          }}
          animate={{
            rotate: `${handAngle.minutes}deg`,
            originX: "50%",
            originY: "50%",
          }}
          fill="black"
        />
        <motion.rect
          x="137"
          y="14"
          width="2"
          height="125.223"
          rx="1"
          initial={{
            rotate: `${handAngle.seconds}deg`,
            originX: "50%",
            originY: "50%",
          }}
          animate={{
            rotate: `${handAngle.seconds}deg`,
            originX: "50%",
            originY: "50%",
          }}
          fill="#d0e7d2"
        />
        <defs>
          <clipPath id="clip0_839_0">
            <rect width="278" height="278" fill="white" />
          </clipPath>
        </defs>
      </svg>

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

export default AnalogTimer;
