import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import MoonLoader from "react-spinners/ClipLoader";
import CardItem from "./CardItem";
import "../../styles/containerCardsItems.css";

const ContainerCardItems = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "react-product")
    
    let queryCollection = itemCollection;
    

    if (idCategory) {
      const categoryFilter = where("type", "==", idCategory);
      queryCollection = query(itemCollection, categoryFilter);
    }
    
    getDocs(queryCollection)
      .then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setItems(docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {items.length === 0 ? (
        <div className="containerSpinner">
          <MoonLoader color="#5b00fb" />
        </div>
      ) : (
        items.map((product) => (
          <CardItem
            key={product.id}
            id={product.id}
            imagen={product.imageProduct}
            title={product.title}
            cantidad={product.stock}
            precio={product.price}
          />
        ))
      )}
    </div>
  );
};

export default ContainerCardItems;