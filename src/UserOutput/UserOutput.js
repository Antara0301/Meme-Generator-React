import React from 'react';
import './UserOutput.css';
const userOutput =(props) => { 
  return (
   <div className="UserOutput">
    <p>Username: {props.userName} </p>
    <p>I am 30 years old.</p>

   </div>


  );

};

export default userOutput;




