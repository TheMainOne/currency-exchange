import { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyles';
import Header from './Header/Header';
import Form from './form/Form';
import { fetchEuroRates, fetchDollarRates } from 'services/fetchCurrency';
import { Container } from './App.styled';

const App = () => {
  const [euro, setEuro] = useState(null);
  const [dollar, setDollar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetchDollarRates().then(currencies => {
        for (const key in currencies.data) {
          if (key === 'UAH') {
            setDollar({ currency: key, value: currencies.data[key] });
          }
        }
      });
      fetchEuroRates().then(currencies => {
        for (const key in currencies.data) {
          if (key === 'UAH') {
            setEuro({ currency: key, value: currencies.data[key] });
          }
        }
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <Container>
      <GlobalStyle />
      {error && <p>Sorry, something went wrong</p>}
      <Header dollar={dollar} euro={euro}></Header>
      <main>
        <Form />
      </main>
    </Container>
  );
};

export default App;
