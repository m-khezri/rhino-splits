import PropTypes from 'prop-types';

const transactionsShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
});

export default transactionsShape;
