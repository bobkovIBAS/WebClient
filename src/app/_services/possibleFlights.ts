import { CityData } from "./city";
import { PossibleFlightDate } from "./possibleFlightDateInt";

export class PossibleFlightsData {
    fromId:CityData;
    toId: CityData;
    planeTypes: string;
    flightDate: PossibleFlightDate[];



  constructor(
    fromId: CityData, 
    toId: CityData, 
    planeTypes: string, 
    flightDate: PossibleFlightDate[]
) {
    this.fromId = fromId
    this.toId = toId
    this.planeTypes = planeTypes
    this.flightDate = flightDate
  }
    
    
    




    
}