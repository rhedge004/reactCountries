import React from 'react';
import Typography from '@material-ui/core/Typography';


const Cities = (cities) => {
  const renderCards = () => cities.map(({name, population})=> (
    <div variant="outlined" style={{margin:'2em', flexBasis:'15%',border:'2px solid black', padding:'1em'}}>
        <Typography variant="h4" style={{textAlign:"center"}}>
          {name}
        </Typography>
        <Typography variant="h4" style={{textAlign:"center", marginTop:'1em '}}>
          {population.toLocaleString()}
        </Typography>
        <Typography variant="h4" style={{textAlign:"center", marginTop:'.5em '}}>
          Citizens
        </Typography>
    </div>
  ));
  return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
      <div>
        <Typography variant="h5">Cities</Typography>
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap', flexBasis:0}}>
        {renderCards()}
      </div>
    </div>
  )
};

export default Cities;
