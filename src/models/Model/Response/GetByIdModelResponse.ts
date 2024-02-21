import { GetAllBrandResponse } from "../../Brand/Response/GetAllBrandResponse";

export interface GetByIdModelResponse {
    id: number;
    name: string;
    brand: GetAllBrandResponse;
}