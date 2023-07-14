import React from 'react';

export const Contact = ({key, name, number}) =>{
    return (<li key={key}>
      <a href="#"> 
      <p>{name} </p>
      <p>{number}</p>
      </a>
     </li>)
}