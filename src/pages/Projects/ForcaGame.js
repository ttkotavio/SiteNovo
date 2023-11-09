import React, { useState, useLayoutEffect } from 'react';
import Confetti from 'react-confetti';
import './ForcaGames.scss';

function ForcaGame() {
  const secretPhrase = 'quer namorar comigo?';
  const words = secretPhrase.split(' '); // Divide a frase em palavras
  const initialDisplayPhrase = words.map((word) => word.replace(/./g, '_')); // Inicializa a frase oculta

  const [displayPhrase, setDisplayPhrase] = useState(initialDisplayPhrase);

  const [usedLetters, setUsedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(5); // Número inicial de tentativas
  const [showConfetti, setShowConfetti] = useState(false);

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

    // Verifica se todas as letras foram adivinhadas
    const isPhraseComplete = displayPhrase.every((word) => !word.includes('_'));
    if (isPhraseComplete) {
      setAttemptsLeft(0); // Define o número de tentativas para 0
      setShowConfetti(true); // Mostra o confete
    }
  };

  const renderAlphabetButtons = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz?-!#$%*';
    return alphabet.split('').map((letter) => (
      <button key={letter} onClick={() => handleGuess(letter)}>
        {letter.toUpperCase()}
      </button>
    ));
  };

  const handleNo = () => {
    // Implemente o código para mover o botão "NÃO" para baixo
    // Isso pode ser feito usando CSS ou animações JavaScript.
    // Por exemplo, você pode adicionar uma classe CSS ao botão "NÃO"
    // que faz ele se mover para baixo.
  };

  const handleYes = () => {
    // Outras ações que você deseja realizar ao clicar em "SIM"
  };

  useLayoutEffect(() => {
    function updateSize() {
      // Atualiza o tamanho da janela aqui, se necessário
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
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
          <button onClick={handleNo}>NÃO</button>
          <button onClick={handleYes}>SIM</button>
        </div>
      )}

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
}

export default ForcaGame;
