import { Title, PageHeader, Currency } from './Header.styled';

const Header = ({ dollar, euro }) => {
  //   const [euro, setEuro] = useState(null);
  //   const [dollar, setDollar] = useState(null);

  //   useEffect(() => {
  //     for (const key in currencies) {
  //       if (key === 'USD') {
  //         setDollar({ currency: key, value: currencies[key] });
  //       } else if (key === 'EUR') {
  //         setEuro({ currency: key, value: currencies[key] });
  //       }
  //     }
  //   }, [currencies]);

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

export default Header;
