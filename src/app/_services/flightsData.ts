import { GuestCard } from "./guestCard";
import { PossibleFlights } from "./possibleFlightInterface";

export interface FlightData {
    id: string;
    guestCard:GuestCard;
    bookingDate: Date;
    possibleFlights: PossibleFlights;
}