import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Person = (props) => {
    // console.log(props);
    const {name,img,field,age,salary,country} = props.person;
    const element = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="person-container">
            <div className="person-card">
                <div className="card-top text-center">
                    <img src={img} alt="" />

                </div>
                <div className="card-bottom">
                    <h3>Name : {name}</h3>
                    <h5>Country: {country}</h5>
                    <h5>Age : {age}</h5>
                    <h5>Field : {field}</h5>
                    <h5>Salary: ${salary}</h5>
                    <button className="mt-3" onClick={()=>props.handleAdd(props.person)}>{element} Add Person</button>
                </div>
            </div>
            
        </div>
    );
};

export default Person;