import { GetAllBrandResponse } from '../../Brand/Response/GetBrandResponse';


export interface GetAllModelResponse {
    id: number;
    name: string;
    brand: GetAllBrandResponse;
}


export interface GetByIdModelResponse {
    id: number;
    name: string;
    brand: GetAllBrandResponse;
}