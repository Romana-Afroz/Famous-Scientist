import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css';

const Persons = () => {
    const [persons, setPersons] =useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    const handleAdd=(person) => {
        const newPerson= [...cart, person];
        setCart(newPerson)
    }
    return (
        <div className="persons-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="persons-card-container">
                            {
                                persons.map(person => <Person
                                key={person.rank}
                                person={person}
                                handleAdd={handleAdd}></Person>)
                            }

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <Cart cart={cart}></Cart>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Persons;