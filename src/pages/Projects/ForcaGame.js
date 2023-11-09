import React, { useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";
import "./ForcaGames.scss";

function ForcaGame() {
  const [cont, setCont] = useState(0); // Declare cont as a state
  const secretPhrase = "quer namorar comigo?";
  const words = secretPhrase.split(" "); // Divide the phrase into words
  const initialDisplayPhrase = words.map((word) => word.replace(/./g, "_")); // Initialize the hidden phrase

  const [displayPhrase, setDisplayPhrase] = useState(initialDisplayPhrase);

  const [usedLetters, setUsedLetters] = useState([]);
  const maxAttempts = 10;
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);
  const [showConfetti, setShowConfetti] = useState(false);
  const [moveAmount, setMoveAmount] = useState(0);

  const [showContent, setShowContent] = useState(true); // State to control content visibility

  const handleGuess = (guess) => {
    if (usedLetters.includes(guess)) {
      // The letter has already been used
      return;
    }

    const newUsedLetters = [...usedLetters, guess];
    setUsedLetters(newUsedLetters);

    let phraseUpdated = displayPhrase.slice(); // Copy the current phrase

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordArray = Array.from(word);

      for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === guess) {
          phraseUpdated[i] = phraseUpdated[i].split("");
          phraseUpdated[i][j] = guess;
          phraseUpdated[i] = phraseUpdated[i].join("");
        }
      }
    }

    setDisplayPhrase(phraseUpdated);

    if (!secretPhrase.includes(guess)) {
      setAttemptsLeft(attemptsLeft - 1);
    } else {
      setCont(cont + 1); // Increment cont using setCont
      console.log(cont);
    }

    if (cont === 11) {
      setAttemptsLeft(0);
    }
  };

  const renderAlphabetButtons = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz?-!#$%*";
    return alphabet.split("").map((letter) => (
      <button key={letter} onClick={() => handleGuess(letter)}>
        {letter.toUpperCase()}
      </button>
    ));
  };

  const handleNo = () => {
    setMoveAmount(moveAmount + 10);
  };

  const handleYes = () => {
    setShowContent(false); // Hide the content when "SIM" is clicked
    setShowConfetti(true);
    // Other actions you want to perform when "SIM" is clicked

    setTimeout(() => {
        setShowConfetti(false);
      }, 15000);
  };

  useLayoutEffect(() => {
    function updateSize() {
      // Update window size here if needed
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="forca-game">
      {showContent ? (
        <div>
          <h1>Jogo da Forca</h1>
          <p className="phrase-label">Frase a ser adivinhada:</p>
          {displayPhrase.map((word, index) => (
            <p key={index} className="phrase">
              {word}
            </p>
          ))}
          <p className="attempts-left">Tentativas restantes: {attemptsLeft}</p>
          <div className="alphabet-buttons">{renderAlphabetButtons()}</div>
        </div>
      ) : (
        <div>
          <h1>OFICIALMENTE NAMORADOS!</h1>
          <p>
            Se tu ta lendo isso significa que estamos namorando... E óbvio que
            eu não poderia só pedir em namoro e não falar/escrever nada
            depois...
          </p>
          <p>
            Em primeiro lugar quero dizer que esses últimos meses foram os
            melhores desse ano! principalmente os dias depois do nosso primeiro
            encontro, eu juro que eu voltei pra casa e a única coisa que eu
            pensava era que eu queria muito te ver de novo.
          </p>
          <p>
            E agora eu passei esses últimos dias pensando em como eu ia te pedir em namoro... e... eu
            confesso que no McDonalds não era como eu tava planejando... só que
            de uns dias pra cá eu sentia que eu não podia mais perder tempo,
            não queria mais passar 1 dia se quer sem te assumir, faz dias que tu
            não sai da minha cabeça, tu é a primeira coisa que eu penso quando
            acordo e fico contigo até o momento de dormir...
          </p>
          <p>
            Sim, as madrugadas programando coisa da AGES era montando esse site
            especialmente pra ti, e eu fiz isso pra mostrar o quanto eu te
            quero, tu é a coisa que eu mais quero nesse mundo e por isso eu não
            podia fazer um pedido de qualquer jeito... talvez eu tenha até
            demorado um pouco pra te pedir em namoro, mas eu queria fazer de
            tudo pra ser um pedido inesquecivel pra ti... eu quero te fazer a
            mulher mais feliz do mundo, e queria muito fazer isso contigo ao meu
            lado.
          </p>
          <p>
            Eu quero completar a lista de coisas que a gente já planejou pra
            fazer juntos, quero inclusive adicionar mais um item na lista
            "planejar mais 1000 coisas", pra gente sempre ter alguma coisa pra
            fazer, mas o que importa mesmo é estar ao teu lado. como eu já disse
            antes, eu vou querer fazer QUALQUER coisa, desde que tu esteja lá, pois esses são os melhores momentos...
          </p>
          <p>
            Daqui pra frente, eu prometo sempre fazer de tudo pra te fazer a
            mulher mais feliz desse universo, te dando MUTIO carinho, amor, apoio em
            tudo o que tu quiser, muitos beijos de todos os tipos (beijos
            malucos, beijos normais, beijos lentos, beijos rapidos, beijinhos,
            beijo de bom dia, beijo de boa noite, beijo de bom trabalho, beijo
            maluco do otávio), sempre vou estar do teu lado, independente do que
            seja, vou te amar cada dia mais, e o mais importante, agora que
            somos namorados... as multas vão aumentar ok? TODAS aumentaram em
            mais de 9000%!
          </p>
          <p>
            E também agora que somos oficialmente namorados eu adoraria começar
            meu "treinamento" contigo.
          </p>
          <p>te amo ❤️</p>
        </div>
      )}

      {attemptsLeft === 0 && (
        <div className="end-game-buttons">
          <button
            className="noButton"
            style={{ transform: `translateY(${moveAmount * 3}px)` }}
            onClick={handleNo}
          >
            NÃO
          </button>
          <button className="yesButton" onClick={handleYes}>
            SIM
          </button>
        </div>
      )}

      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
}

export default ForcaGame;
