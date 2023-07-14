import React from 'react';

import { ContactList, ContactCard, ContactName, ContactNumber, RiDeleteBinLineSvg} from './ContactCard.styled';

export const Contact = ({ id, name, number, onDeleteItem}) =>{
    return (<ContactList>
      <ContactCard href="#" onClick={(e)=>e.preventDefault()}> 
      <ContactName>{name} </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <RiDeleteBinLineSvg onClick={()=>onDeleteItem(id)}/>
      </ContactCard>
     </ContactList>)
}