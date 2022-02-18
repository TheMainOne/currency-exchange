import axios from 'axios';

axios.defaults.baseURL = 'https://freecurrencyapi.net/api/v2/';
const KEY = '5d270fe0-8f29-11ec-94fb-634c1a134e61';

async function fetchCurrencyWithErrorHandling(url = '') {
  const response = await axios.get(url);
  const data = response.data;
  return data;
}

export function fetchRatesByCurrency(currency) {
  return fetchCurrencyWithErrorHandling(
    `latest?apikey=${KEY}&base_currency=${currency}`
  );
}
