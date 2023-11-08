import React, { useState } from "react";
import "./ForcaGames.scss";

function ForcaGame() {
  const secretPhrase = "quer namorar comigo?";
  const [displayPhrase, setDisplayPhrase] = useState(
    Array(secretPhrase.length).fill("_")
  );

  const [usedLetters, setUsedLetters] = useState([]);
  const maxAttempts = 10;
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);

  const handleGuess = (guess) => {
    if (usedLetters.includes(guess)) {
      // A letra já foi usada
      return;
    }

    const newUsedLetters = [...usedLetters, guess];
    setUsedLetters(newUsedLetters);

    if (!secretPhrase.includes(guess)) {
      setAttemptsLeft(attemptsLeft - 1);
    }

    const newDisplayPhrase = [...displayPhrase];
    for (let i = 0; i < secretPhrase.length; i++) {
      if (secretPhrase[i] === guess) {
        newDisplayPhrase[i] = guess;
      }
    }
    setDisplayPhrase(newDisplayPhrase);
  };

  const renderAlphabetButtons = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").map((letter) => (
      <button key={letter} onClick={() => handleGuess(letter)}>
        {letter.toUpperCase()}
      </button>
    ));
  };

  return (
    <div className="forca-game">
      <h1>Jogo da Forca</h1>
      <p className="phrase-label">Frase a ser adivinhada:</p>
      <p className="phrase">{displayPhrase.join(" ")}</p>
      <p className="attempts-left">Tentativas restantes: {attemptsLeft}</p>
      <div className="alphabet-buttons">{renderAlphabetButtons()}</div>
    </div>
  );
}

export default ForcaGame;
