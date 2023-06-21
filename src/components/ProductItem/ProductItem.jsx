import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';
import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
function ProductItem  ({product, className,onAdd})  {
  //const [count, setCount] = useState(0);
    
  const onAddHandler = () => {
        onAdd(product);
    }
    /*const handleIncrement = () => {
      setCount(count + 1);
      onAdd(product);
    };
    const handleDecrement = () => {
      setCount(count - 1);
      onRemove(product);
    };*/
    const imageMap = {
        '1': img1,
        '2': img2,
        '3': img3,
        '4': img4,
        '5': img5,
        '6': img6,
        '7': img7,
        '8': img8,
        '9': img9,
      };
      //<Link to={`/product/${product.id}`} state={{ product }}>"{product.title}"</Link>
      const imgSrc = imageMap[product.id];
      const location = useLocation();
    return (
        <div className={'product ' + className}>
            <div className={'img'}>
                <img src={imgSrc} alt={product.title} />
            </div>
            <div className={'title'}>"{product.title}"</div>
            <div className={'author'}>by {product.author}</div>
            <div className={'price'}>
                <span>Вартість: <b>{product.price} ₴</b></span>
            </div>
            <Link to={`/product/${product.id}`} state={{ product }}>
        <div className={'details-link'}>Детальніше</div>
      </Link>
      
        <Button title={"Додати в корзину"} type={"add"} onClick={onAddHandler} />
     
        </div>
    );
};

export default ProductItem;