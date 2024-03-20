import React from 'react';
import { useHistory } from 'react-router-dom';

const VolverButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack(); // Esta función te lleva a la página anterior en el historial de navegación.
  };

  return (
    <button onClick={handleClick}>
      Volver
    </button>
  );
};

export default VolverButton;