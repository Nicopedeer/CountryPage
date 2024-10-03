import { Injectable } from '@nestjs/common';
import axios from 'axios';
require('dotenv').config()


@Injectable()
export class CountriesService {
    private nagerApi = process.env.NAGER_API
    private postmanApi = process.env.POSTMAN_API
    
    async getCountries(){
        const countries = (await axios.get(`${this.nagerApi}AvailableCountries`)).data

        return countries
    }

    async getCountryInfo( code : string){
        try{
        const countryInfo = (await axios.get(`${this.nagerApi}CountryInfo/${code}`)).data;
        const populationData = (await axios.get(`${this.postmanApi}population`)).data.data.filter((country: any) => 
            country.country === countryInfo.commonName || country.country === countryInfo.officialName
        );
        const flagUrl: string = (await axios.get(`${this.postmanApi}flag/images`)).data.data.filter((country: any) => 
            country.name === countryInfo.commonName || country.name === countryInfo.officialName
        )[0]?.flag;
       
        

        return {countryInfo, populationData, flagUrl}   
    }
    catch(e){
        console.error(e)
        return e.message
    }
}
}