import React, { useEffect, useState } from 'react';
import { addTobd, displayFormdb } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



const Home = () => {
    const [foods, setFoods] = useState([])
    const [selectedFood,setSelectedFood]=useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    useEffect(()=>{
        
    },[])
    const handelAddToCart = (food) => {
        const alradySavedFood = selectedFood.find(fd => fd === food.strMeal)
        if (alradySavedFood) {
            alert("Age Thak Ase")
        }
        else{
            setSelectedFood([...selectedFood, food.strMeal]);
            addTobd(food.idMeal, food.strMeal)
    
        }
           
       
    }
    useEffect(()=>{
        const newCart = displayFormdb()
        let newFood=[];
        for (const food in newCart ){
            newFood.push(newCart[food])
        }

        setSelectedFood(newFood)
    }, [])

    return (
        <>
            <div className='flex gap-3 my-3'>
                <div className='w-[75%] px-20 bg-gray-100 p-20'>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            foods.map(food => <Product key={food.idMeal} food={food} handelAddToCart={handelAddToCart} ></Product>)
                        }
                    </div>


                </div>
                <div className='w-[25%] h-screen bg-gray-100 sticky top-0 overflow-y-auto px-10'>
                    <h1 className='text-center text-4xl font-bold'>Added Food Name</h1>
                    {
                        selectedFood.map((sf, index) => <Cart key={index + 1} selectedFood={sf} index={index} ></Cart>)
                    }
                    

                </div>
            </div>

        </>
    );
};

export default Home;