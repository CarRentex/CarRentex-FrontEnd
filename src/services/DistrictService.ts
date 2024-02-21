import { axiosInstance } from './../lib/axios';
import { AxiosResponse } from "axios";
import { GetAllDistrictResponse, GetByIdDistrictResponse } from "../models/District/District";

class DistrictService {

    public apiUrl =  "distircts";


    getAll(): Promise<AxiosResponse<GetAllDistrictResponse, any>> {
		return axiosInstance.get<GetAllDistrictResponse>(this.apiUrl + "/getAll");
	}

	getById(id: number): Promise<AxiosResponse<GetByIdDistrictResponse, any>> {
		return axiosInstance.get<GetByIdDistrictResponse>(this.apiUrl +`/getById?id=${id}`); // düzelt
	}


	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/" + id);
	}
}

export default new DistrictService();