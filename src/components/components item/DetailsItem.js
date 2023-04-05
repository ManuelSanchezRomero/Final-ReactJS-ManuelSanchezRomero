import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import MoonLoader from "react-spinners/ClipLoader";
import Image from "./Image";
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import "../../styles/detailsItem.css";

const DetailsItem = () => {
  const [item, setItem] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "react-product", idItem);

    getDoc(itemDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [idItem]);

  return (
    <div className="detailsItem">
      {!item ? (
        <div className="containerSpinner">
          <MoonLoader color="#5b00fb" />
        </div>
      ) : (
        <>
          <div className="containerLeft">
            <Image imagen={item.imageProduct.firstImage} />
          </div>
          <div className="containerRigth">
            <Description
              title={item.title}
              parrafo={item.description}
              cantidad={item.stock}
              precio={item.price}
            />
            <div className="buttons">
              <ButtonDetalles txt="Agregar al carrito" id={item.id} />
              <ButtonAddCart item={item} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsItem;

