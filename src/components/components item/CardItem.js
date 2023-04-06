import Image from "./Image";
import { Link } from "react-router-dom";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../img/cart-white.svg"




const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image 
                imagen={props.imagen}
                />
            <Description 
                title= {props.title}
                cantidad = {props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles 
                        txt="Ver detalles" 
                    />
                </Link>

                <ButtonAddCart 
                    id={props.id}
                    svg={cart}
                    cant={props.quantity}
                />
            </div>
        </div>
    )
}

export default CardItem;