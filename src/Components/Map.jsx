import React, { Component } from 'react';
import Chart from "react-google-charts";
import getCountries from '../data/diseases';

class Map extends Component {
  render() {
    const data = [['Country', 'Cases']];
    const result = getCountries('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true');
    result.then(responses => {
      responses.map(response => {
        data.push([response.country, response.cases]);
      })
    });
    return (<Chart
      width={'100%'}
      height={'100vh'}
      chartType="GeoChart"
      data={data}
      options={{
        colorAxis: { colors: ['red'] },
      }}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey="[YOUR API GOOGLE KEY]"
      rootProps={{ 'data-testid': '1' }}
    />)
  }
}

export default Map;