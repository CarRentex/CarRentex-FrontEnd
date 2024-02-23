import { GetAllBrandResponse } from '../../Brand/Response/GetAllBrandResponse';


export interface GetAllModelResponse {
    id?: number;
    name?: string;
    brand?: GetAllBrandResponse;
}


