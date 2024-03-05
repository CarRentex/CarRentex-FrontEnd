import { GetAllDistrictResponse } from "../District/District";


// şehirleri getirir
export interface GetAllCityResponse {
    id: number;
    name: string;
}

// şehirler ve ona ait olan ilçeleri getirir
export interface GetAllCityAndDistrictResponse {
    id: number;
    name: string;
    district: GetAllDistrictResponse;
}