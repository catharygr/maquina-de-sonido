import "../style.css";
import { useRef, useEffect } from "react";

function App() {
  const heater1 = useRef(null);
  const heater2 = useRef(null);
  const heater3 = useRef(null);
  const heater4 = useRef(null);
  const heater6 = useRef(null);
  const kickHat = useRef(null);
  const rpKick = useRef(null);
  const cevH2 = useRef(null);
  const dscOh = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "Q":
        case "q":
          heater1.current.play();
          break;
        case "W":
        case "w":
          heater2.current.play();
          break;
        case "E":
        case "e":
          heater3.current.play();
          break;
        case "A":
        case "a":
          heater4.current.play();
          break;
        case "S":
        case "s":
          heater6.current.play();
          break;
        case "D":
        case "d":
          kickHat.current.play();
          break;
        case "Z":
        case "z":
          rpKick.current.play();
          break;
        case "X":
        case "x":
          cevH2.current.play();
          break;
        case "C":
        case "c":
          dscOh.current.play();
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    // return window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSonido(ref) {
    ref.play();
  }
  return (
    <main id="drum-machine">
      <div id="display"></div>
      <div className="botones">
        <button
          onClick={() => handleSonido(heater1.current)}
          className="drum-pad"
          id="heater-1"
        >
          Q
          <audio
            ref={heater1}
            className="clip"
            id="Q"
            src="/Heater-1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(heater2.current)}
          className="drum-pad"
          id="heater-2"
        >
          W
          <audio
            ref={heater2}
            className="clip"
            id="W"
            src="/Heater-2.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(heater3.current)}
          className="drum-pad"
          id="heater-3"
        >
          E
          <audio
            ref={heater3}
            className="clip"
            id="E"
            src="/Heater-3.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(heater4.current)}
          className="drum-pad"
          id="heater-4"
        >
          A
          <audio
            ref={heater4}
            className="clip"
            id="A"
            src="/Heater-4_1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(heater6.current)}
          className="drum-pad"
          id="heater-6"
        >
          S
          <audio
            ref={heater6}
            className="clip"
            id="S"
            src="/Heater-6.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(kickHat.current)}
          className="drum-pad"
          id="kickHat-1"
        >
          D
          <audio
            ref={kickHat}
            className="clip"
            id="D"
            src="/Kick_n_Hat.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(rpKick.current)}
          className="drum-pad"
          id="rpKick-1"
        >
          Z
          <audio
            ref={rpKick}
            className="clip"
            id="Z"
            src="/RP4_KICK_1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleSonido(cevH2.current)}
          className="drum-pad"
          id="cevH2-1"
        >
          X<audio ref={cevH2} className="clip" id="X" src="/Cev_H2.mp3"></audio>
        </button>

        <button
          onClick={() => handleSonido(dscOh.current)}
          className="drum-pad"
          id="dscOh-1"
        >
          C<audio ref={dscOh} className="clip" id="C" src="/Dsc_Oh.mp3"></audio>
        </button>
      </div>
    </main>
  );
}
export default App;
