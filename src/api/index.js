import axios from 'axios';

const url = 'https://covid-api.com/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/reports/total?iso=${country}`;
  }
  else{
    changeableUrl = `${url}/reports/total`;
  }
  try {
    const {data} = await axios.get(changeableUrl)
    const extract_data = data.data
    let confirmed = extract_data.confirmed
    let deaths = extract_data.deaths
    let recovered = confirmed - deaths
    let last_update = extract_data.last_update
    return { confirmed, recovered, deaths, last_update };
  } catch (error) {
    return error;
  }
};
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/reports/total`);

      console.log(data);
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/regions`);
    return data.data
  } catch (error) {
    return error;
  }
};
