import { Component } from 'react';
import FormPhonebook from 'components/FormPhonebook';
import {
  Section,
  Container,
  Title,
  TitleContacts,
  ContactUl,
} from './App.styled';
import { Contact } from 'components/ContactCard/ContactCard';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  markupContacts = () => {
    return this.state.contacts.map(contact => {
      return <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number}  onDeleteItem={this.deleteItem}/>;
    });
  };

deleteItem =(contactId) => {
 this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId)
 }))
  
}

  render() {
    return (
      <>
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <FormPhonebook onSubmit={this.addContact} />
            {this.state.contacts.length === 0 ? null : (
              <>
                <TitleContacts>Contacts</TitleContacts>
                <ContactUl>{this.markupContacts()}</ContactUl>
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
