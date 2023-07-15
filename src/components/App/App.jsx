import { Component } from 'react';
import FormPhonebook from 'components/FormPhonebook';
import { Section, Container, Title, TitleContacts, DiPhonegapSvg } from './App.styled';
import { Contact } from 'components/ContactCard/ContactCard';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section>
          <Container>
            <Title><DiPhonegapSvg/>Phonebook</Title>
            <FormPhonebook onSubmit={this.addContact} />
            {this.state.contacts.length === 0 ? null : (
              <>
                <TitleContacts>Contacts</TitleContacts>
                <Filter
                  value={this.state.filter}
                  onChange={this.searchFilter}
                />
                <Contact
                  array={filteredContacts}
                  onDeleteItem={this.deleteItem}
                />
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
