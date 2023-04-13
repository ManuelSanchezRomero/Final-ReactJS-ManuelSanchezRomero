import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";


const CheckoutPage = ( cart, totalPrice ) => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  const GraciasPage = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    try {
      const newOrder = {
        cart: cart,
        totalPrice: totalPrice,
        name: formValues.name,
        address: formValues.address,
        paymentMethod: formValues.paymentMethod,
        date: new Date(),
      };

      await addDoc(ordersCollection, newOrder);

      // Limpiar carrito y redirigir al usuario a la página de agradecimiento
      localStorage.removeItem("cart");
      GraciasPage.push("/thank-you-page");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Direccion:
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
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
        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
