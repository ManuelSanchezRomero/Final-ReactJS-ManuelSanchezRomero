import { useState, createContext } from "react";
import {
  getFirestore,
  collection,
  getDocs,

} from "firebase/firestore";

export const listCartContext = createContext(null);

const ProviderContextoListCart = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const addProduct = (id, cant) => {
    const db = getFirestore();
    const itemCollection = collection(db, "react-product");

    getDocs(itemCollection)
      .then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        const product = docs.find((product) => product.id === id);

        if (product) {
          let add = true;
          for (let item of listCart) {
            if (item.id === id) {
              if (item.quantity + cant <= product.stock) {
                const newQuantity = { ...item, stock: item.quantity =+ cant };
                setListCart((prevListCart) =>
                  prevListCart.map((item) =>
                    item.id === id ? newQuantity : item
                  )
                );
              }
              add = false;
              break;
            }
          }
          add &&
            setListCart((prevListCart) => [
              ...prevListCart,
              { ...product, stock: cant },
            ]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearCart = () => {
    setListCart([]);
  };

  const removeFromCart = (id) => {
    setListCart((prevListCart) =>
      prevListCart.filter((product) => product.id !== id)
    );
  };

  return (
    <listCartContext.Provider
      value={{ removeFromCart, listCart, addProduct, clearCart }}
    >
      {children}
    </listCartContext.Provider>
  );
};

export default ProviderContextoListCart;