import React, { useState, useEffect } from 'react';
import BasicLayout from "../layouts/BasicLayout";
import { getGameByUrlApi } from "../api/game";
import useCart from "../hooks/useCart";

export default function Cart() {
    const { getProductsCart } = useCart();
    const products = getProductsCart();
    
    return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
    return (
        <BasicLayout className="empty-cart">
            <h2>No hay productos en el carrito</h2>
        </BasicLayout>
    );
}

function FullCart(props) {
    const { products } = props;
    const [productsData, setProductsData] = useState(null);
    console.log(productsData);
    
    useEffect(() => {
        (async () => {
            const productsTemp = [];
            for await (const product of products) {
                const data = await getGameByUrlApi(product);
                productsTemp.push(data);
            }
            setProductsData(productsTemp);
        })();
    }, []);

    return (
        <BasicLayout className="empty-cart">
            <h2>carrito</h2>
        </BasicLayout>
    );
}