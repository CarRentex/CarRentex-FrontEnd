import { GetAllCarResponse } from "../../Car/Response/GetAllCarResponse";
import { GetAllLocationResponse } from "../../Location/Response/GetAllLocationResponse";
import { GetAllUserResponse } from "../../User/Response/GetAllUserResponse";

export interface GetAllRentalResponse {
    id: number;
    startDate: string;
    endDate: string;
    totalPrice: number;
    startLocation: GetAllLocationResponse;
    endLocation: GetAllLocationResponse;
    car: GetAllCarResponse;
    user: GetAllUserResponse;
}
