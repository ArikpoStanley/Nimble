import axios from "axios";

const apiKey = "CG-VbKwCCHciVmksgFrG2PHKYnB"

export const getDetailedCoinData = async (coinId) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,  {
      headers: {
        'Authorization': `Bearer ${apiKey}` // or 'x-api-key': apiKey depending on the API
      }
    })
    return response.data;
    console.warn(response.data)
  } catch (e) {
    console.log(e);
  }
}

export const getCoinMarketChart = async (coinId, selectedRange) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=daily`)
    return response.data;
  } catch (e) {
    console.log(e)
  }
}

export const getMarketData = async (pageNumber = 1) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)    
    return response.data;
  } catch (e) {
    console.log(e)
  }
}

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`, {
      headers: {
        'Authorization': `Bearer ${apiKey}` // or 'x-api-key': apiKey depending on the API
      }
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getAllCoins = async () => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`, {
      headers: {
        'Authorization': `Bearer ${apiKey}` // or 'x-api-key': apiKey depending on the API
      }
    })
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export const getCandleChartData = async (coinId, days = 1) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}