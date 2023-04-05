import { useContext } from "react";
import { listCartContext } from "./providerContextoListCart";


const ButtonAddCart = ({ id, svg }) => {
  const { addProduct } = useContext(listCartContext);

  const handleClick = (cant) => {
    addProduct(id, cant);
  };

  return (
    <div>

      <button id="addCart" onClick={() => handleClick(1)}>
        <img src={svg} alt="add"></img>
      </button>
    </div>
  );
};

export default ButtonAddCart;