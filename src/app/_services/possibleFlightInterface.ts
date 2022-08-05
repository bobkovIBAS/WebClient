import { CityData } from "./city";
import { PossibleFlightDate } from "./possibleFlightDateInt";

export interface PossibleFlights {
    id: string;
    fromId:CityData;
    toId: CityData;
    planeTypes: string;
    dateFlight:string;
    freePlaces:number;
    sumTicket:number;

}