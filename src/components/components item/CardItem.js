import Image from "./Image";
import { Link } from "react-router-dom";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../img/cart-white.svg"
import AddCantCart from "../../components/components item/AddCantCart"




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

                <div className="buttons">

</div>
            </div>
        </div>
    )
}

export default CardItem;