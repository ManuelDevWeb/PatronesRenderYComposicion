import React from "react";

// Importando estilos
import "./Loading.css";

const Loading = () => {
  return (
    <li className="TodoItem-loading">
      <div className="LoaderBalls">
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
      </div>
    </li>
  );
};

export { Loading };
