import { CityData } from "./city.interface";
import { PossibleFlightDate } from "./possibleFlightDateInt";

export interface PossibleFlights {
    id: string;
    fromId:CityData;
    toId: CityData;
    planeTypes: string;
    flightDate: PossibleFlightDate[]; 

}