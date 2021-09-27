import React from 'react';
import './Booked.css';

const Booked = (props) => {
    // console.log(props);
    return (
        <div>
            <p className="booked-person">{props.booked.name}</p>
            
        </div>
    );
};

export default Booked;