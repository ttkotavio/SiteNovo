import React, { useState } from "react";
import "./ForcaGames.scss";

function ForcaGame() {
  const secretPhrase = "quer namorar comigo?";
  const words = secretPhrase.split(" "); // Divide a frase em palavras
  const initialDisplayPhrase = words.map(word => word.replace(/./g, "_")); // Inicializa a frase oculta

  const [displayPhrase, setDisplayPhrase] = useState(initialDisplayPhrase);

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

    let phraseUpdated = displayPhrase.slice(); // Copia a frase atual

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordArray = Array.from(word);

      for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === guess) {
          phraseUpdated[i] = phraseUpdated[i].split('');
          phraseUpdated[i][j] = guess;
          phraseUpdated[i] = phraseUpdated[i].join('');
        }
      }
    }

    setDisplayPhrase(phraseUpdated);

    if (!secretPhrase.includes(guess)) {
      setAttemptsLeft(attemptsLeft - 1);
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

  return (
    <div className="forca-game">
      <h1>Jogo da Forca</h1>
      <p className="phrase-label">Frase a ser adivinhada:</p>
      {displayPhrase.map((word, index) => (
        <p key={index} className="phrase">{word}</p>
      ))}
      <p className="attempts-left">Tentativas restantes: {attemptsLeft}</p>
      <div className="alphabet-buttons">{renderAlphabetButtons()}</div>
    </div>
  );
}

export default ForcaGame;
