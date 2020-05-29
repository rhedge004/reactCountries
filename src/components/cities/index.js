import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
        CitiesContainer,
        CardContainer,
        Card,
        CityName,
        CityPopulation,
        CitizensText
        } from "./styles";


const Cities = (cities) => {
  const renderCards = () => cities.map(({name, population})=> (
    <Card variant="outlined">
        <CityName variant="h4">
          {name}
        </CityName>
        <CityPopulation variant="h4">
          {population.toLocaleString()}
        </CityPopulation>
        <CitizensText variant="h4">
          Citizens
        </CitizensText>
    </Card>
  ));
  return(
    <CitiesContainer>
      <div>
        <Typography variant="h5">Cities</Typography>
      </div>
      <CardContainer>
        {renderCards()}
      </CardContainer>
    </CitiesContainer>
  )
};

export default Cities;
