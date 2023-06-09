import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext} from "../components item/providerContextoListCart";

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";



const ContainerCart = () => {

    
    const db = getFirestore();
    const navigate = useNavigate();
    const handleCheckout = async () => {
        const ordersCollection = collection(db, "orders");
        const order = { 
          products: listCart,
          totalPrice: totalPrice
        };
        try {
          const docRef = await addDoc(ordersCollection, order);
          console.log("Document written with ID: ", docRef.id);
          navigate(`/checkout/${docRef.id}`);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
    

    

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart, clearCart, totalPrice } = useContext(listCartContext);
    // console.log(listCart)
    const style = {
        display: cartShow
    }
    

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        
            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="close" onClick={closeCart}>
                        <img src={close} alt="cerrar"></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart.map(producto => ( 
                            <ItemCart 
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.imageProduct}
                                quantity={producto.stock}
                                price={producto.price}
                            />
                        ))
                    }   
                </div>

                <p className="totalPagar">Total a pagar: <span className="spanTotal">$ {totalPrice}</span> </p>
                <div className="TerminarCompra">
                        <button className="terminar" onClick={handleCheckout}>
                            Terminar compra
                        </button>

                    <button className="clear" onClick={clearCart}>
                        <img src={clear} alt="limpiar"></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart