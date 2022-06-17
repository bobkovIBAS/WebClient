import { City } from "./city.model";

export class SearchFlight {


  constructor(toCity: City, fromCity: City, dateFlight: Date) {
    this.toCity = toCity
    this.fromCity = fromCity
    this.dateFlight = dateFlight
  }
    toCity: City;
    fromCity: City;
    dateFlight: Date;

    

}