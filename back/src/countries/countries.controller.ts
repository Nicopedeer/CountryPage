import { Body, Controller, Get, Param } from "@nestjs/common";
import { CountriesService } from "./countries.service";


@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getCountries(){
    return this.countriesService.getCountries()
  }

  @Get(':code')
  async getCountryInfo(@Param('code') code : string ){
    return  await this.countriesService.getCountryInfo(code)
  }



  
}
