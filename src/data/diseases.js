import fetch from 'node-fetch';

async function getCountries(url) {
  if (url === "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true") {
    let result = fetch(url);
    return (await result).json().then(resp => resp);
  }
  throw new Error('endpoint não existe');
}

export default getCountries;