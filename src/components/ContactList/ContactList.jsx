import PropTypes from 'prop-types';
export function ContactList({ contacts, onBtnDelete }) {
  return (
    <ul className="contactList">
      {contacts.map(item => (
        <li className="contactItem" key={item.id}>
          {item.name}
          <span>{item.number}</span>
          <button id={item.id} onClick={onBtnDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  onBtnDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
