import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';

class FormPhonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();

  inputNumberId = nanoid();

  handleChange = ({ target }) => {
    this.setState({
      [target['name']]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}>
            Name
            <Field
              type="text"
              name="name"
              id={this.inputNameId}
              onChange={this.handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
          </label>

          <label htmlFor={this.inputNumberId}>
            Number
            <Field
              type="tel"
              name="number"
              id={this.inputNumberId}
              onChange={this.handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export default FormPhonebook;
