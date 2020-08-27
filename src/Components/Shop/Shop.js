import React from 'react';
import fakeData from '../../fakeData/fakeData';
import './Shop.css';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';


const Shop = () => {

    const [courses, setCourses]=useState(fakeData);
    const [cart, setCart]= useState([]);
    

    const handleAddCourses = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
       
    }
    
    return (
       

            <div className="shop-container">

                <div className="course-container">
                    <div className="row">
                    {
                                
                                courses.map(course => <Course handleAddCourses ={handleAddCourses} course={course} key={course.key}></Course>)
                            
                            }
                    </div>
                </div>
                <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            </div>
                    
     
    
    );
};

export default Shop;