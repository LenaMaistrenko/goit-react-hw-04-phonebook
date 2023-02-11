import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
      <form onSubmit={this.handleSubmit} className={css.contactform}>
        <label className={css.formlabel}>
          Name :
          <input
            className={css.forminput}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name || ''}
            required
          />
        </label>
        <label className={css.formlabel}>
          Number :
          <input
            className={css.forminput}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number || ''}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addbtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
