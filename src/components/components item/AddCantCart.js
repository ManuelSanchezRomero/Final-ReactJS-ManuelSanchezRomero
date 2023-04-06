import { useState } from "react";

const AddCantCart = ({ initialCant, onCantChange }) => {
  const [cant, setCant] = useState(initialCant);


  const handleCant = (e) => {
    setCant(parseInt(e.target.value));
  };

  const handleDecrease = () => {
    if (cant > 1) {
      const newCant = cant - 1;
      setCant(newCant);
      onCantChange && onCantChange(newCant);
    }
  };
  
  const handleIncrease = () => {
    const newCant = cant + 1;
    setCant(newCant);
    onCantChange && onCantChange(newCant);
    console.log(newCant);
  };
  
  
  return (
    <div className="addCantCart">
      <span>Quiero:</span>
      <div>
        <button id="quitar" onClick={handleDecrease}>-</button>

        <span className="cantTxt">{cant} unidades</span>

        <button id="aumentar" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default AddCantCart;