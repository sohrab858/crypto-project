const BASE_URL = "https://api.coingecko.com/api/v3";
const KEY = "CG-5v3UMmpfqKDahRC9Ra2eUa8n";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${KEY}`;
};
const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${KEY}`;
export { getCoinList, searchCoin };
