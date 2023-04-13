import React, { useState, useContext} from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../../styles/checkout.css"
import { listCartContext } from "../components item/providerContextoListCart";


const CheckoutPage = () => {
  
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const { listCart } = useContext(listCartContext);
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "confirmar");

    try {
      const newOrder = {
        totalPrice: totalPrice,
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
{listCart.map((item) => (
  <div key={item.id}>
    <p>{item.name} - ${item.price} x {item.quantity}</p>
  </div>
))}
<p>Total: ${totalPrice}</p>

    <div className="CheckContainer">
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
            <option value="debit-card">Tarjeta de credito</option>
            <option value="paypal">Mercadopago</option>
          </select>
        </label>
<br></br>
        <button type="submit" onClick={handleSubmit}>Realizar Pedido</button>
      </form>
    </div>
</>
  );
};

export default CheckoutPage;
