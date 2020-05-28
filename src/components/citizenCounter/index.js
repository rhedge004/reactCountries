import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';

const citizenTotal = (cities) => {
  const total = cities.reduce((prev,next) => prev + next.population,0);
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
      <div style={{display:"flex", flexDirection:'column'}}>
        <Typography variant="h5">Total Citizens: {total.toLocaleString()}</Typography>
      </div>
    </div>
  );
};

export default citizenTotal;
