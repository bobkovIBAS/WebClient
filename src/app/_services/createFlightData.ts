import { CityData } from "./city";

export interface CreateFlight {
    fromId:CityData;
    toId: CityData;
    planeTypes: string;
    dateFlight: string;
}