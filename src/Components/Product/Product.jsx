import {  faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Product = (props) => {
    // console.log(props);
    const { strMeal, strCategory, strMealThumb, strArea, strInstructions } = props.food
    const handelAddToCart = props.handelAddToCart
    return (
        <>
            {/* <p>Live from Product {strMeal}</p> */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-[50%]'><img className='h-full w-full' src={strMealThumb} alt="Movie" /></figure>
                <div className="card-body w-[50%]">
                    <h2 className="card-title">{strMeal}</h2>
                    <h3 className='text-lg'>Str. Category : {strCategory}</h3>
                    <p>{strInstructions.slice(0,200)}..</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelAddToCart(props.food)} className="btn btn-primary">Add To Card <FontAwesomeIcon icon={faCartShopping}/> </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;