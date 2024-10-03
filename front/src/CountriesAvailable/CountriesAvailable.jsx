import { useState, useEffect } from "react";
import { Spin } from 'antd';
import axios from 'axios';
import { Link } from "react-router-dom";

const CountriesAvailable = () =>{
    const [countriesArray, setCountriesArray] = useState([])
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('http://localhost:3000/countries');
            setCountriesArray(response.data);
          } catch (error) {
            console.error('Error fetching countries', error);
          }
        };
    
        fetchCountries();
        
      }, []);

    return(
        <>
        {countriesArray.length > 0 ? (
            <>
            <h1 className="title"> Countries</h1>
            <div className='gridContainer'>
            {countriesArray.map(country => <div className="countryCard">
            <p className="countryHeading">{country.name}</p>
            <button className="acceptButton"><Link className="acceptButton" to={`${country.countryCode}`}>See more</Link></button>
          </div>)}
            </div>
            </>
        ) : (
            <Spin />
        )}
    </>
    )
}
export default CountriesAvailable;