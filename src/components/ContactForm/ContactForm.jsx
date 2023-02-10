import PropTypes from 'prop-types';
export function ContactForm({ handleChange, formSubmit, name, number }) {
  return (
    <form onSubmit={formSubmit}>
      <label>
        NAME
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name || ''}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />{' '}
      </label>
      <label>
        NUMBER
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number || ''}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />{' '}
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
