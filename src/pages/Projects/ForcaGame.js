import React, { useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";
import "./ForcaGames.scss";

function ForcaGame() {
  const [cont, setCont] = useState(0); // Declare cont como um estado
  const secretPhrase = "quer namorar comigo?";
  const words = secretPhrase.split(" "); // Divide a frase em palavras
  const initialDisplayPhrase = words.map((word) => word.replace(/./g, "_")); // Inicializa a frase oculta

  const [displayPhrase, setDisplayPhrase] = useState(initialDisplayPhrase);

  const [usedLetters, setUsedLetters] = useState([]);
  const maxAttempts = 10;
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);
  const [showConfetti, setShowConfetti] = useState(false);
  const [moveAmount, setMoveAmount] = useState(0);

  const handleGuess = (guess) => {
    if (usedLetters.includes(guess)) {
      // A letra já foi usada
      return;
    }

    const newUsedLetters = [...usedLetters, guess];
    setUsedLetters(newUsedLetters);

    let phraseUpdated = displayPhrase.slice(); // Copia a frase atual

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
      setCont(cont + 1); // Incrementa cont usando setCont
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
    setShowConfetti(true);
    // Outras ações que você deseja realizar ao clicar em "SIM"
  };

  useLayoutEffect(() => {
    function updateSize() {
      // Atualiza o tamanho da janela aqui, se necessário
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="forca-game">
      <h1>Jogo da Forca</h1>
      <p className="phrase-label">Frase a ser adivinhada:</p>
      {displayPhrase.map((word, index) => (
        <p key={index} className="phrase">
          {word}
        </p>
      ))}
      <p className="attempts-left">Tentativas restantes: {attemptsLeft}</p>
      <div className="alphabet-buttons">{renderAlphabetButtons()}</div>

      {attemptsLeft === 0 && (
        <div className="end-game-buttons">
          <button
        className="noButton"
        style={{ transform: `translateY(${moveAmount*3}px)`}}
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
