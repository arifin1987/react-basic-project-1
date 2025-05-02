

const Country = ({country}) => {
    console.log(country)
  return (
    <div>
      <h1>{country.name.common}</h1>
    </div>
  )
}

export default Country
