import { Component } from 'react';
import FormPhonebook from 'components/FormPhonebook';
import { Section, Container, Title } from './App.styled';
import { nanoid } from 'nanoid';

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
      
     return <li key={id}>{contact.name} {contact.number}</li>})
  }

  render() {
    return (
      <>
      <Section>
        <Container>
          <Title>Phonebook</Title>
        <FormPhonebook onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <ul>
        {this.markupContacts()}
        </ul>
        </Container>
      </Section>
        
      </>
    );
  }
}
