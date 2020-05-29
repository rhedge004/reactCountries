import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const CitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flexBasis: 0;
`;

export const Card = styled.div`
  margin: 2em;
  flex-basis: 15%;
  border: 2px solid black;
  padding: 1em;
`;

export const CityName = styled(Typography)`
  text-align: center;
`;

export const CityPopulation = styled(Typography)`
  text-align: center;
  margin-top: 1em;
`;

export const CitizensText = styled(Typography)`
  text-align: center;
  margin-top: .5em;
`;
