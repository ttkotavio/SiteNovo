import React, { useState } from "react";
import "./Tinder.scss";
import HeaderComponent from "../../components/header/Header";

import foto1 from "../../assets/tinder/foto1.jpg";
import foto2 from "../../assets/tinder/foto2.jpg";
import foto3 from "../../assets/tinder/foto3.jpg";
import foto4 from "../../assets/tinder/foto4.jpg";
import foto5 from "../../assets/tinder/foto5.jpg";
import foto6 from "../../assets/tinder/foto6.jpg";

import foto7 from "../../assets/tinder/foto7.jpg";
import foto8 from "../../assets/tinder/foto8.jpg";
import foto9 from "../../assets/tinder/foto9.jpg";
import foto10 from "../../assets/tinder/foto10.jpg";
import foto11 from "../../assets/tinder/foto11.jpg";
import foto12 from "../../assets/tinder/foto12.jpg";

import foto13 from "../../assets/tinder/foto13.jpg";
import foto14 from "../../assets/tinder/foto14.jpg";
import foto15 from "../../assets/tinder/foto15.jpg";
import foto16 from "../../assets/tinder/foto16.jpg";
import foto17 from "../../assets/tinder/foto17.jpg";
import foto18 from "../../assets/tinder/foto18.jpg";

import foto19 from "../../assets/tinder/foto19.jpg";
import foto20 from "../../assets/tinder/foto20.jpg";
import foto21 from "../../assets/tinder/foto21.jpg";
import foto22 from "../../assets/tinder/foto22.jpg";
import foto23 from "../../assets/tinder/foto23.jpg";
import foto24 from "../../assets/tinder/foto24.jpg";
import foto25 from "../../assets/tinder/foto25.jpg";

function AboutMe() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Otávio Cunha",
      photos: [foto1, foto2, foto3],
    },
    {
      id: 2,
      name: "Otávio Cunha",
      photos: [foto4, foto5, foto6],
    },
    {
      id: 3,
      name: "Otávio Cunha",
      photos: [foto7, foto8, foto9, foto10, foto11],
    },
    {
      id: 4,
      name: "Otávio Cunha",
      photos: [foto12, foto13],
    },
    {
      id: 5,
      name: "Otávio Cunha",
      photos: [foto14, foto15, foto16, foto17],
    },
    {
      id: 6,
      name: "Otávio Cunha",
      photos: [foto18],
    },
    {
      id: 7,
      name: "Otávio Cunha",
      photos: [foto19, foto20],
    },
    {
      id: 8,
      name: "Otávio Cunha",
      photos: [foto21, foto22, foto23, foto24, foto25],
    },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleLike = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    setCurrentPhotoIndex(0); // Reinicia o carrossel de fotos
  };

  const handleReject = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    setCurrentPhotoIndex(0); // Reinicia o carrossel de fotos
  };

  const nextPhoto = () => {
    const card = cards[currentCardIndex];
    if (currentPhotoIndex < card.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="appe">
      <HeaderComponent style={2} />
      <h1>Tinder</h1>
      {currentCardIndex < cards.length ? (
        <div className="card">
          <div className="card-photos">
            <img
              src={cards[currentCardIndex].photos[currentPhotoIndex]}
              alt={`Foto ${currentPhotoIndex}`}
              onClick={nextPhoto} // Avança para a próxima foto ao clicar na imagem
            />
          </div>
          <p className="card-name">{cards[currentCardIndex].name}</p>
          <div className="photo-indicators">
            {cards[currentCardIndex].photos.map((_, index) => (
              <div
                key={index}
                className={`photo-indicator ${
                  index === currentPhotoIndex ? "active" : ""
                }`}
                onClick={() => handleIndicatorClick(index)} // Clique na bolinha para selecionar a foto
              ></div>
            ))}
          </div>
          <div className="card-actions">
            <button onClick={handleReject}>X</button>
            <button onClick={handleLike}>❤️</button>
          </div>
        </div>
      ) : (
        <p className="subtitle">Não há mais perfis para exibir.</p>
      )}
    </div>
  );
}

export default AboutMe;
