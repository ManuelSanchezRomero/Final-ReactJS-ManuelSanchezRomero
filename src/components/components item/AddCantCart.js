/* eslint-disable no-unused-vars */
import { useState } from "react";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../img/cart-white.svg"


const AddCantCart = ({ initialCant, onCantChange, item }) => {
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
  };
  
  
  return (
    <div className="addCantCart">
      <span className="quieroSpan">Quiero:</span>
      <div>
        <button id="quitar" onClick={handleDecrease}>-</button>

        <span className="cantTxt">{cant} unidades</span>

        <button id="aumentar" onClick={handleIncrease}>+</button>
      </div>
      <ButtonAddCart 
                    id={item.id}
                    svg={cart}
                    cant={cant}

                />
    </div>
  );
};

export default AddCantCart;