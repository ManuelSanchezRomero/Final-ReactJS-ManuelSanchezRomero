import { useState } from "react";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../img/cart-white.svg"


const AddCantCart = ({ initialCant, onCantChange, item }) => {
  const [cant, setCant] = useState(initialCant);

const handleCant = (e) => {
  setCant(parseInt(e.target.value));

  console.log(handleCant)
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
        <button id="quitar" onClick={handleDecrease}>
          -
        </button>
        <span className="cantTxt">{cant} unidades</span>
        <button id="aumentar" onClick={handleIncrease}>
          +
        </button>
      </div>
        <ButtonAddCart  id={item.id}
                        svg={cart}
                        cant={cant}/>

    </div>

  );
};

export default AddCantCart;