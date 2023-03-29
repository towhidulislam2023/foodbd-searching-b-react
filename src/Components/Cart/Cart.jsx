import { faBaby, faCake, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Cart = (props) => {
    return (
        <div>
            
            <div>
                <h5 className='text-lg font-bold text-black my-2'>
                    <FontAwesomeIcon icon={faCheck} />
                    {props.index+1}: {props.selectedFood}</h5>
            </div>

           
           
        </div>
    );
};

export default Cart;