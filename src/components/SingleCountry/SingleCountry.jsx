import { useState } from 'react'
import './SingleCountry.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const SingleCountry = ({country,handleAddVisitedCountry}) => {
  console.log(country);
  const[visited, setVisited] = useState(false)
  const handleVisited = ()=>{
    setVisited(!visited)
  }
  
  return (
    <div className={`single-country ${visited && 'visited'}`}>
      <h1 style={{color: visited? 'red': 'green'}} >{country.name.common}</h1>  
      <button onClick={handleVisited}>{visited? 'Visited': 'I want to visit'}</button>  
      <button onClick={()=>handleAddVisitedCountry(country)}>Add visited Country</button>
      <hr />
      <CountryDetail
      country ={country}
      handleAddVisitedCountry={handleAddVisitedCountry}
      
      />
      
    </div>
  )
}

export default SingleCountry
