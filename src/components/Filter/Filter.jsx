import PropTypes from 'prop-types';
export function Filter({ value, onChange }) {
  return (
    <label>
      FIND CONTACTS BY NAME
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
