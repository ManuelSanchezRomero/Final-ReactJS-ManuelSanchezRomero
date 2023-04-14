import React, { useState} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../../styles/checkout.css"
import { useNavigate } from "react-router-dom";



const CheckoutPage = () => {
  const navigate = useNavigate();
  const {idOrder} = useParams();
  console.log({idOrder});
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/finalizar');

    const db = getFirestore();
    const ordersCollection = collection(db, "confirmar");

    try {
      const newOrder = {
        name: formValues.name,
        address: formValues.address,
        paymentMethod: formValues.paymentMethod,
        date: new Date(),
      };

      await addDoc(ordersCollection, newOrder);


      localStorage.removeItem("cart");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
<>

    <div className="CheckContainer">
      <div className="form">
      <h2 >Finalizar Compra</h2>
      <form >
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
<br></br>
        <label>
          Direccion:
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
          />
        </label>
<br></br>
        <label className="labelPago">
          Forma de pago:
          <select
            name="paymentMethod"
            value={formValues.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            <option value="credit-card">Tarjeta de credito</option>
            <option value="debit-card">Tarjeta de debito</option>
            <option value="mercadopago">Mercadopago</option>
          </select>
        </label>
<br></br>

            <button type="submit" onClick={handleSubmit} className="checkSubmit">Realizar Pedido</button>

      </form>
      </div>
    </div>
</>
  );
};

export default CheckoutPage;
