import { useEffect, useState } from "react"
import SingleCountry from "../SingleCountry/SingleCountry"
import './Country.css'



const Country = () => {
    const [countries, setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])

    const handleAddVisitedCountry=(country)=>{
      const newVisitedCountry = [...visitedCountries,country]
      setVisitedCountries(newVisitedCountry);
  

  }
  return (
    <div>
      <h1>Countries:{countries.length}</h1>
      <h1>Visited Countries:{visitedCountries.length}</h1>
      
      
        <ul>
          {
          visitedCountries.map(visited => <div>
             <img width='70px' src={visited.flags.png} />
             <li>{visited.name.common}</li>

          </div>)
        }
        </ul>
      
      
      <div className="country">
        {
        countries.map(country => 
            <SingleCountry
            key={country.name.common}
            country ={country}
            handleAddVisitedCountry={handleAddVisitedCountry}
            
            ></SingleCountry>
            
           
        )
      }
      
      </div>
      
    </div>
  )
}

export default Country
