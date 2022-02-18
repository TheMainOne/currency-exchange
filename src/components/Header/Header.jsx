import propTypes from 'prop-types';
import { Title, PageHeader, Currency } from './Header.styled';

const Header = ({ dollar, euro }) => {
  return (
    <PageHeader>
      <div>
        <Title>Currency converter</Title>
      </div>
      <div>
        <ul>
          {euro && (
            <li>
              <Currency>Euro: {euro.value.toFixed(2)}</Currency>
            </li>
          )}
          {dollar && (
            <li>
              <Currency>Dollar: {dollar.value.toFixed(2)}</Currency>
            </li>
          )}
        </ul>
      </div>
    </PageHeader>
  );
};

Header.propTypes = {
  dollar: propTypes.shape({
    currency: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
  }),
  euro: propTypes.shape({
    currency: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
  }),
};

export default Header;
