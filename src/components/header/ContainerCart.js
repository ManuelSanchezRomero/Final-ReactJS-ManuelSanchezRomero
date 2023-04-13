import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext} from "../components item/providerContextoListCart";
import { Link } from "react-router-dom";

const ContainerCart = () => {

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
                    <Link to="/checkout">
                        <button className="terminar" >
                            Terminar compra
                        </button>
                    </Link>
                    <button className="clear" onClick={clearCart}>
                        <img src={clear} alt="limpiar"></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart