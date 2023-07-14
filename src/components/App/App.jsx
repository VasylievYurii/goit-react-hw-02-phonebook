import { Component } from 'react';
import FormPhonebook from 'components/FormPhonebook';
import { Section, Container, Title, TitleContacts } from './App.styled';
import { nanoid } from 'nanoid';
import { Contact } from 'components/ContactCard/ContactCard';

export class App extends Component {
  state = {
    contacts: [],
    
  };



 addContact = data => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts, data]
  }));
 }

  markupContacts = () => {
    return this.state.contacts.map(contact => {
      const id = nanoid();
      console.log("id:", id);
      
     return <Contact key={id} name={contact.name} number={contact.number}/>})
    //   <a href="#"> 
    //   <p>{contact.name} </p>
    //   <p>{contact.number}</p>
    //   </a>
    //  </Contact>})
  }

  render() {
    return (
      <>
      <Section>
        <Container>
          <Title>Phonebook</Title>
        <FormPhonebook onSubmit={this.addContact}/>
        {this.state.contacts.length === 0 ? null : <TitleContacts>Contacts</TitleContacts>}
        <ul>
        {this.markupContacts()}
        </ul>
        </Container>
      </Section>
        
      </>
    );
  }
}
