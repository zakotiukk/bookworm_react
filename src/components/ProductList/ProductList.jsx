import React, {useState} from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";


const products = [
    {id: '1', title: 'Everything I Know About Love', price: 480,  author: 'Dolly Alderton'},
    {id: '2', title: 'Solstice of Death', price: 820,  author:  'Laurence Anholt'},
    {id: '3', title: 'Dune', price: 600,  author:  'Frank Herbert'},
    {id: '4', title: 'The Night They Vanished', price: 650,  author: 'Vanessa Savage'},
    {id: '5', title: '1984', price: 530,  author:  'George Orwell'},
    {id: '6', title: "Harry potter and the philosopher's stone", price: 340, author:  'J. K. Rowling'},
    {id: '7', title: 'Book of night', price: 490,  author:  ' Holly Black'},
    {id: '8', title: 'The hound of the baskervilles', price: 150, author:  ' Arthur Conan Doyle'},
    {id: '9', title: 'Beartown', price: 570, author:  'Fredrik Backman'},
]

const getTotalPrice =(items = []) =>{
    return items.reduce((acc,item) => {
        return acc+=item.price
    },0)
}
const ProductList = () => {
    const [addedItems, setAddedItems]=useState([]);
    const {tg} =useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        
    }, [addedItems])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length ===0){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Придбати ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={"list"}>
            {products.map(item => (
                <ProductItem
                product={item}
                onAdd={onAdd}
                className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;