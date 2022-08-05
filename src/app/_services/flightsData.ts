import { CityData } from "./city";
import { GuestCard } from "./guestCard";

export interface FlightData {
    id: string;
    guestCard:GuestCard;
    fromId:CityData;
    toId:CityData;
    planeTypes: string;
    dateFlight: string;
}