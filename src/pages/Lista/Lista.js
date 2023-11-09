import React, { useState } from "react";
import "./Lista.scss";
import HeaderComponent from "../../components/header/Header";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Ir no cara de mau", completed: false },
    { id: 2, text: "Ir na cafeteria do Harry Potter", completed: false },
    { id: 3, text: "Ir na pizzaria favorita da Giulia", completed: false },
    { id: 4, text: "Ir na Hamburgueria de canoas", completed: false },
    { id: 5, text: "Ir no capão", completed: false },
    { id: 6, text: "Assistir Barbie", completed: false },
    { id: 7, text: "Montar um Quebra Cabeças", completed: false },
  ]);

  const handleToggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="App">
      <HeaderComponent style={1} />
      <div className="content">
        <h1>Checklist de Coisas para Fazer</h1>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label className="label">
              <input
                className="input"
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggleItem(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
