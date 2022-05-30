import { GuestCard } from "./guestCard";
import { PossibleFlights } from "./possibleFlights";

export interface FlightData {
    id: string;
    guestCard:GuestCard;
    bookingDate: Date;
    possibleFlights: PossibleFlights;
}