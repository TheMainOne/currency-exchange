import { Title } from './Header.styled';

const Header = ({ dollar, euro }) => {
  console.log(dollar, euro);
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
    <header>
      <div>
        <Title>Currency converter</Title>
      </div>
      <div>
        <ul>
          {euro && <li>Euro:{euro.value}</li>}
          {dollar && <li>Dollar:{dollar.value}</li>}
        </ul>
      </div>
    </header>
  );
};

export default Header;
