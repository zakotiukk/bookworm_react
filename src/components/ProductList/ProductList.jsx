import React, {useState} from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';

const products = [
    {id: '1', 
    title: 'Everything I Know About Love', 
    price: 320,  
    author: 'Доллі Олдертон',
    description:'Award-winning journalist Dolly Alderton survived her twenties (just about) and in Everything I Know About Love, she gives an unflinching account of the bad dates and squalid flat-shares, the heartaches and humiliations, and most importantly, the unbreakable female friendships that helped her to hold it all together. Glittering with wit, heart and humour, this is a book to press into the hands of every woman who has ever been there or is about to find themselves taking that first step towards the rest of their lives.',
    pages:"368",
    rating: 3,
    year:"2019",
    publisher: "Penguin",
    format:"130x200 мм",
    img: img1,
    },
    {id: '2', 
    title: "Harry potter and the philosopher's stone", 
    price: 340, 
    author:  'Джоан Роулінг',
},
    {id: '3', title: 'Dune', price: 430,  author:  'Френк Герберт'},
    {id: '4', 
    title: '1984', 
    price: 380,  
    author:  'Джордж Орвелл',
    description:"View our feature on George Orwell’s 1984. Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, Orwell’s narrative is timelier than ever. 1984 presents a startling and haunting vision of the world, so powerful that it is completely convincing from start to finish. No one can deny the power of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    pages:"332",
    rating: 4,
    year:"2008",
    publisher: "Penguin",
    format:"130x200 мм",
    img: img4,
},
    {id: '5', title: 'The Night They Vanished', price: 350,  author: 'Ванесса Севідж'},
    {id: '6', title: 'The hound of the baskervilles', price: 150, author:  'Артур Конан Дойл'},
    {id: '7', title: 'Book of night', price: 490,  author:  'Холлі Блек'},
    {id: '8', title: 'Beartown', price: 425, author:  'Фредрік Бакман'},
    {id: '9', title: 'Solstice of Death', price: 290,  author:  'Лоуренс Анхолт'},
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
        };
    }, [onSendData,tg]);

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