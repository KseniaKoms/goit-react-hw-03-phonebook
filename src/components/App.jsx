import { React, Component } from 'react';
import Container from './Container';
import ContactsList from './ContactsList';
import Title from './Title';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`${name} is already in contacts!`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { name: name, id: nanoid(), number: number },
        ],
      });
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilteredItems = () => {
    const { contacts, filter } = this.state;
    const normilized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilized)
    );
  };

  render() {
    const filteredItems = this.getFilteredItems();
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.handleSubmit} />
        <Title title="Contacts" />
        <Filter filter={this.state.filter} onChange={this.handleFilter} />
        <ContactsList
          contacts={filteredItems}
          handleDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
