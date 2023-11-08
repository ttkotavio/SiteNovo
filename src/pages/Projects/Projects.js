import HeaderComponent from "../../components/header/Header";
import React, { useState } from "react";

import "./Projects.scss";
import ForcaGame from "./ForcaGame"; // Importe o componente do jogo da forca

function Projects() {
  const questions = [
    {
      question: "Qual a cor favorita do Otávio?",
      options: ["Verde", "Vermelho", "Azul", "Amarelo"],
      answer: "Azul",
    },
    {
      question: "A primeira cartinha que o Otavio fez foi:",
      options: [
        "Do Senhor dos Anéis",
        "De Star Wars",
        "Do Harry Potter",
        "De Pokémon",
      ],
      answer: "Do Harry Potter",
    },
    {
      question: "Qual o time do Otávio?",
      options: ["Grêmio", "Inter", "Santos", "Corinthians"],
      answer: "Grêmio",
    },
    {
      question: "Qual é o tipo de filme favorito do Otávio?",
      options: ["Comédia", "Ação", "Romance", "Terror"],
      answer: "Terror",
    },
    {
      question: "Qual série o Otávio perdeu a aposta dos beijos?",
      options: [
        "Boba Fett",
        "Breaking Bad",
        "Stranger Things",
        "Game of Thrones",
      ],
      answer: "Boba Fett",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showForcaGame, setShowForcaGame] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="app">
      <HeaderComponent />
      <div className="content">
        {quizCompleted ? (
          <div>
            <h1>Quiz completo!</h1>
            <p className="questions">
              Parabéns você acertou: {score} de {questions.length}
            </p>
            <button onClick={() => setShowForcaGame(true)}>Continuar</button>
          </div>
        ) : (
          <div>
            <h1>Conhece mesmo o Otávio?</h1>
            <p className="questions">{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <button className="button" onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
        {showForcaGame && <ForcaGame />}
      </div>
    </div>
  );
}

export default Projects;
