import React from 'react';

import { cards, countryPicker, chart } from './components';
import {BrowserRouter} from 'react-router-dom';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>

        <img className={styles.image} src={image} alt="COVID-19" />
        <cards data={data} />
        <countryPicker handleCountryChange={this.handleCountryChange} />
        <chart data={data} country={country} /> 

      </div>
    );
  }
}

export default App;
