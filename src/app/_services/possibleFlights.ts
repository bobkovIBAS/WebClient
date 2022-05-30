import { CityData } from "./city";

export interface PossibleFlights {
    id: string;
    fromId:CityData;
    toId: CityData;
    planeTypes: string;
    freePlaces: number;
    dateFlights: string;
    sumTicket: number;
}