import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchRatesByCurrency } from 'services/fetchCurrency';
import {
  Wrapper,
  Select,
  Button,
  TitleOfInput,
  DropList,
  InputsWrapper,
  DebounceCustomInput,
} from './Form.styled';

const Form = () => {
  const [amountValue, setAmountValue] = useState(null);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const alertNotify = () =>
    toast.error('Please choose any currency and enter some value');

  return (
    <Wrapper>
      <form
        name="signup_form"
        autoComplete="on"
        noValidate
        onSubmit={event => {
          event.preventDefault();
          const amount = event.target.elements.fromInput.value;
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
            fetchRatesByCurrency(fromCurrency).then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              if (!exchangeRate) {
                setExchangeRate(amount);
                event.target.elements.toInput.value = amount;
                return;
              }
              setExchangeRate(totalExchangeRate);
              event.target.elements.toInput.value = totalExchangeRate;
            });
          } else if (fromCurrency === 'UAH') {
            fetchRatesByCurrency(fromCurrency).then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              setExchangeRate(totalExchangeRate);
              event.target.elements.toInput.value = totalExchangeRate;
            });
          } else if (fromCurrency === 'EUR') {
            fetchRatesByCurrency(fromCurrency).then(currencies => {
              const exchangeRate = currencies.data[toCurrency];
              const totalExchangeRate = (amount * exchangeRate).toFixed(2);
              setExchangeRate(totalExchangeRate);
              event.target.elements.toInput.value = totalExchangeRate;
            });
          }
        }}
      >
        <div>
          <TitleOfInput>Enter amount</TitleOfInput>
          <InputsWrapper>
            <DebounceCustomInput
              minLength={1}
              placeholder="0.00"
              name="fromInput"
              debounceTimeout={500}
              onChange={event => {
                const fromCurrency =
                  event.nativeEvent.path[3].elements.from.value;
                const toCurrency = event.nativeEvent.path[3].elements.to.value;
                const firstInputValue =
                  event.nativeEvent.path[3].elements.fromInput.value;

                if (amountValue && fromCurrency === 'USD') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      firstInputValue * exchangeRate
                    ).toFixed(2);
                    setAmountValue(firstInputValue);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);

                    if (!exchangeRate) {
                      setExchangeRate(firstInputValue);
                      event.nativeEvent.path[3].elements.toInput.value =
                        firstInputValue;
                      return;
                    }
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (amountValue && fromCurrency === 'UAH') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      firstInputValue * exchangeRate
                    ).toFixed(2);

                    setAmountValue(firstInputValue);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (amountValue && fromCurrency === 'EUR') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      firstInputValue * exchangeRate
                    ).toFixed(2);

                    setAmountValue(firstInputValue);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                }
              }}
            />
            <DebounceCustomInput
              minLength={1}
              placeholder="0.00"
              name="toInput"
              debounceTimeout={500}
              onChange={event => {
                const fromCurrency =
                  event.nativeEvent.path[3].elements.from.value;
                const toCurrency = event.nativeEvent.path[3].elements.to.value;
                const secondInputValue =
                  event.nativeEvent.path[3].elements.toInput.value;

                if (amountValue && toCurrency === 'USD') {
                  fetchRatesByCurrency(toCurrency).then(currencies => {
                    const exchangeRate = currencies.data[fromCurrency];
                    const totalExchangeRate = (
                      secondInputValue * exchangeRate
                    ).toFixed(2);

                    if (!exchangeRate) {
                      setExchangeRate(secondInputValue);
                      event.nativeEvent.path[3].elements.fromInput.value =
                        secondInputValue;
                      return;
                    }

                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.fromInput.value =
                      totalExchangeRate;
                  });
                } else if (amountValue && toCurrency === 'UAH') {
                  fetchRatesByCurrency(toCurrency).then(currencies => {
                    const exchangeRate = currencies.data[fromCurrency];
                    const totalExchangeRate = (
                      secondInputValue * exchangeRate
                    ).toFixed(2);

                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.fromInput.value =
                      totalExchangeRate;
                  });
                } else if (amountValue && toCurrency === 'EUR') {
                  fetchRatesByCurrency(toCurrency).then(currencies => {
                    const exchangeRate = currencies.data[fromCurrency];
                    const totalExchangeRate = (
                      secondInputValue * exchangeRate
                    ).toFixed(2);

                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.fromInput.value =
                      totalExchangeRate;
                  });
                }
              }}
            />
          </InputsWrapper>
        </div>
        <div>
          <DropList>
            <div>
              <p>From</p>
            </div>
            <Select
              name="from"
              onChange={event => {
                const fromCurrency = event.target.value;
                const toCurrency = event.nativeEvent.path[3].elements.to.value;

                if (!exchangeRate) {
                  return;
                }

                if (fromCurrency === 'USD') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);

                    if (!exchangeRate) {
                      setExchangeRate(amountValue);
                      event.nativeEvent.path[3].elements.toInput.value =
                        amountValue;
                      return;
                    }
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (fromCurrency === 'UAH') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (fromCurrency === 'EUR') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                }
              }}
            >
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
            </Select>
            <div>
              <p>To</p>
            </div>
            <Select
              name="to"
              onChange={event => {
                const toCurrency = event.target.value;
                const fromCurrency =
                  event.nativeEvent.path[3].elements.from.value;

                if (!exchangeRate) {
                  return;
                }

                if (fromCurrency === 'USD') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);

                    if (!exchangeRate) {
                      setExchangeRate(amountValue);
                      event.nativeEvent.path[3].elements.toInput.value =
                        amountValue;
                      return;
                    }
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (fromCurrency === 'UAH') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                } else if (fromCurrency === 'EUR') {
                  fetchRatesByCurrency(fromCurrency).then(currencies => {
                    const exchangeRate = currencies.data[toCurrency];
                    const totalExchangeRate = (
                      amountValue * exchangeRate
                    ).toFixed(2);
                    setFromCurrency(fromCurrency);
                    setToCurrency(toCurrency);
                    setExchangeRate(totalExchangeRate);
                    event.nativeEvent.path[3].elements.toInput.value =
                      totalExchangeRate;
                  });
                }
              }}
            >
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
            </Select>
          </DropList>
          {!fromCurrency && null}
          {!toCurrency && null}
        </div>
        <Button type="submit">Get exchange rate</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
