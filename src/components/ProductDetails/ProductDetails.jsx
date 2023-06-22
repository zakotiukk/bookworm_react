import React from 'react';
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';
import Button from "../Button/Button";
import imgSrc from "../ProductItem/ProductItem";
const ProductDetails = () => {
    const location = useLocation();
    const product = location.state.product;
    const onAddHandler = () => {
        onAdd(product);
    }
    const renderRating = () => {
        const stars = [];
        const rating = Math.round(product.rating); // Round the rating to the nearest integer
    
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<span key={i} className="star filled-star">☆</span>);
          } else {
            stars.push(<span key={i} className="star">☆</span>);
          }
        }
    
        return stars;
      };
      //const imgSrc = imageMap[product.id];
    return (
        <div className={'product-details'}>
            <div className={'img'}>
                <img src={product.img} />
            </div>
            <div className={'title'}>"{product.title}"</div>
            <div className={'author'}>{product.author}</div>
            <div className={'description'}>{product.description}</div>
            <div className="format-pages-container">
            <div className={'format'}>Формат: {product.format}</div>
            <div className={'pages'}>Кількість сторінок: {product.pages}</div>
            </div>
            <div className="publisher-year-container">
            <div className={'publisher'}>Видавництво: {product.publisher}</div>
            <div className={'year'}>Рік видання: {product.year}</div>
            </div>
            <div className="rating" data-rating={product.rating}>
        {renderRating()}</div>
        <Button title={"Додати в корзину"} type={"add"} onClick={onAddHandler} />
        </div>
    );
};

export default ProductDetails;