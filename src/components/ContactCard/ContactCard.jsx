import React from 'react';

import { ContactList, ContactCard, ContactName, ContactNumber, RiDeleteBinLineSvg} from './ContactCard.styled';

export const Contact = ({ name, number, onClick}) =>{
    return (<ContactList>
      <ContactCard href="#" onClick={(e)=>e.preventDefault()}> 
      <ContactName>{name} </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <RiDeleteBinLineSvg onClick={onClick}/>
      </ContactCard>
     </ContactList>)
}