import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    const { categoryId } =useParams()

    useEffect(() => {
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, [categoryId]);

    return (
        <main>
            <h1 style={{ color: 'black', margin: 5, fontSize: 30, display: 'flex', justifyContent: 'center', background: 'grey' }}>{greeting}</h1>
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;