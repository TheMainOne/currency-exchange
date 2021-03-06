import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './GlobalStyles';
import Header from './Header/Header';
import Form from './form/Form';
import { fetchRatesByCurrency } from 'services/fetchCurrency';
import { Container } from './App.styled';

const App = () => {
  const [euro, setEuro] = useState(null);
  const [dollar, setDollar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetchRatesByCurrency('USD').then(currencies => {
        for (const key in currencies.data) {
          if (key === 'UAH') {
            setDollar({ currency: key, value: currencies.data[key] });
          }
        }
      });
      fetchRatesByCurrency('EUR').then(currencies => {
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
      <hr />
      <main>
        <Form />
      </main>
      <Toaster />
    </Container>
  );
};

export default App;
