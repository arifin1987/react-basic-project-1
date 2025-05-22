import CountryData from "../CountryData/CountryData"


const CountryDetail = (props) => {
    // const {country,handleAddVisitedCountry }= props;
  return (
    <div>
      <h1>Country Detail</h1>
      {/* <CountryData
      country={country}
      handleAddVisitedCountry={handleAddVisitedCountry}
      /> */}

      <CountryData
    {...props}
    
    ></CountryData>
    </div>
    
  )
}

export default CountryDetail
