import { useContext } from "react";
import { listCartContext } from "./providerContextoListCart";


const ButtonAddCart = ({ id, svg, cant}) => {
  const { addProduct } = useContext(listCartContext);

  const handleClick = () => {
    addProduct(id, cant);
  };

  return (
    <div>

      <button id="addCart" onClick={handleClick}>
        <img src={svg} alt="add"></img>
      </button>
    </div>
  );
};

export default ButtonAddCart;