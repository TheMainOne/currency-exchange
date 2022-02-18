import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  fetchDollarRates,
  fetchEuroRates,
  fetchUaRates,
} from 'services/fetchCurrency';
import {
  Wrapper,
  Input,
  Select,
  Button,
  TitleOfInput,
  DropList,
} from './Form.styled';

const Form = () => {
  const [amountValue, setAmountValue] = useState(null);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const alertNotify = () => toast.error('Please choose any currency');

  return (
    <Wrapper>
      <form
        name="signup_form"
        autoComplete="on"
        noValidate
        onSubmit={event => {
          event.preventDefault();
          let amount = event.target.elements.input.value;
          const fromCurrency = event.target.elements.from.value;
          const toCurrency = event.target.elements.to.value;

          if (amount === '' || amount === '0') {
            alertNotify();
            return;
          }

          setFromCurrency(fromCurrency);
          setToCurrency(toCurrency);
          setAmountValue(amount);

          if (fromCurrency === 'USD') {
            fetchDollarRates().then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              setExchangeRate(totalExchangeRate);
            });
          } else if (fromCurrency === 'UAH') {
            fetchUaRates().then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              setExchangeRate(totalExchangeRate);
            });
          } else if (fromCurrency === 'EUR') {
            fetchEuroRates().then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              setExchangeRate(totalExchangeRate);
            });
          }
        }}
      >
        <div>
          <TitleOfInput>Enter amount</TitleOfInput>
          <Input name="input" type="text" placeholder="0.00" />
        </div>
        <div>
          <DropList>
            <div>
              <p>From</p>
            </div>
            <Select name="from">
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
            </Select>
            <div>
              <p>To</p>
            </div>
            <Select name="to">
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
            </Select>
          </DropList>
          {exchangeRate ? (
            <p>{`${amountValue} ${fromCurrency} = ${exchangeRate} ${toCurrency}`}</p>
          ) : (
            <p>Please select some currency...</p>
          )}
        </div>
        <Button type="submit">Get exchange rate</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
