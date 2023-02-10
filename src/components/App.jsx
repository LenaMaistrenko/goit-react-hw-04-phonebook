import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    const repitName = this.state.contacts.find(item => {
      return item.name === name;
    });
    if (repitName) {
      alert(`${name} is already in your contacts`);

      this.reset();
      return;
    } else {
      const newContact = { id: nanoid(), name, number };
      this.setState({
        contacts: [newContact, ...this.state.contacts],
      });
    }

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  onBtnDelete = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };
  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts } = this.state;
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h1>PHONEBOOK</h1>
        <ContactForm
          handleChange={this.handleChange}
          formSubmit={this.formSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} value={this.state.filter} />
        <ContactList contacts={filterContacts} onBtnDelete={this.onBtnDelete} />
      </>
    );
  }
}
