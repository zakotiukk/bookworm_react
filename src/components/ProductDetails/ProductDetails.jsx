import React from 'react';
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';
import Button from "../Button/Button";
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
      
    return (
        <div className={'product-details'}>
            <img src={product.img}/>
            <div className={'title'}>"{product.title}"</div>
            <div className={'author'}>by {product.author}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'pages'}>Pages: {product.pages}</div>
            <div className="rating" data-rating={product.rating}>
        {renderRating()}</div>
        <Button className={'add-btn'} onClick={onAddHandler}>
                Додати в корзину
            </Button>
        </div>
    );
};

export default ProductDetails;