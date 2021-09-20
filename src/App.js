// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Countries>

      </Countries> */}

    </div>
  );
}
// function Countries() {
//   const [countries, serCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => serCountries(data));

//   }, [])

//   return (
//     <div>
//       <h2>Travelling around the word</h2>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capiital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Capital: {props.capiital}</p>

//     </div>
//   )
// }
export default App;
