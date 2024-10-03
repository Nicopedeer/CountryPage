import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Spin } from 'antd';
import PopulationChart from "../PopulationChart/PopulationChart";
import axios from 'axios';


const CountryData = () =>{
    const {id} = useParams()
    const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:3000/countries/${id}`);
          setCountryInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching country info', error);
      }
    };
    fetchCountryInfo();
  }, [id]);
  console.log(id)
  console.log(countryInfo)
  const displayInfo = countryInfo?.countryInfo
  const borders = displayInfo?.borders
  const population = countryInfo?.populationData[0]?.populationCounts
  const flag = countryInfo?.flagUrl



  
  if(countryInfo){
    return(
      <>
      <p><Link className="goHome" to={`/`}>Go Home</Link></p>
      <h1>{displayInfo.commonName}</h1>
        <img src={flag} alt="no flag found"/>
        <div className="bordersContainer">
        {borders.map(country => <div className="countryCard">
            <p className="countryHeading">{country.commonName}</p>
            <button className="acceptButton"><Link className="acceptButton" to={`/${country.countryCode}`}>See more</Link></button>
            </div>)}
        </div>
        <div>
      {population?.length > 0 && (
        <PopulationChart populationData={population} />
      )}
    </div>
      </>
    )
  }
  else{
    return(
      <Spin/>
    )
  }
}
export default CountryData