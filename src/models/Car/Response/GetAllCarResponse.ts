import { GetAllColorResponse } from "../../Color/Color";
import { GetAllModelResponse } from "../../Model/Response/GetAllModelResponse";

export type GetAllCarResponse = {
    slice(arg0: number, arg1: number): unknown;
    id?: number;
    kilometer?: number;
    year?: number;
    dailyPrice?: number; //double
    minFindeksRate?: number; // short
    plate?: string;
    gearType?: string;
    fuelType?: string;
    category?: string;
    passengerCapacity?: number; // short
    imagePath?: string;
    model?: GetAllModelResponse;
    color?: GetAllColorResponse;
    active?: boolean;
}








