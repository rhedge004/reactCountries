import React, {useState} from 'react';
import countriesArray from './json/countries';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CitizenCounter from './components/citizenCounter';
import CitiesCard from './components/cities';

function App() {
  const countries = countriesArray;
  const [country, setCountry] = useState('');

  const [states, changeStates] = useState([]);
  const [state, setState] = useState('');

  const [cities, changeCities] = useState([]);

  const getStates = (countryCode) => countries.countriesArray.map(({states,code}) => countryCode === code ? changeStates(states) : '' );

  const getCities = (stateCode) => states.map(({cities,code}) => stateCode === code ? changeCities(cities) : '' );

  return (
    <div className="App" style={{display:'flex', flexDirection:'column'}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:'space-evenly',width:'100%'}}>
          <div>
            <InputLabel>Please select a country below</InputLabel>
            <Select
              value={country}
              onChange={event => {
                setCountry(event.target.value);
                getStates(event.target.value);
                }
              }
            >
              {countries.countriesArray.map( ({code, name}) => (
                <MenuItem value={code}>{name}</MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel>{country ? 'Please select a state below' : 'Please select a country first'}</InputLabel>
            <Select
              disabled={country ? false : true}
              onChange={event => {
                setState(event.target.value);
                getCities(event.target.value);
                }
              }
            >
              {states ? states.map(({code, name})=> <MenuItem value={code}>{name}</MenuItem>) : ''}
            </Select>
          </div>
        </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:'space-evenly',width:'100%'}}>
      {CitizenCounter(cities)}
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:'space-evenly',width:'100%'}}>
      {CitiesCard(cities)}
      </div>
    </div>
  );
}

export default App;
