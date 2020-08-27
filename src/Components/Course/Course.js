import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Course.css';

const Course = (props) => {
    const {title,img,instructor,price}= props.course

    return (


        <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card mb-4 border-info">
            <div className="row no-gutters">
                <div className="picture">
                    <img  className="card-img-top img-fluid" src={img} alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title"> {title}</h3>
                        <h6 className="card-text">By: <strong>{instructor}</strong></h6>
                        <p className="card-text">Course Fee: <strong >$ {price}</strong></p>
                        <button className="btn btn-info" onClick={() => props.handleAddCourses(props.course)}> <FontAwesomeIcon icon={faShoppingCart}/> Enroll Now!</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Course;