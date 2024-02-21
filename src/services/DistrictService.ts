import { AxiosResponse } from "axios";
import { axios } from "../lib/axios";
import { GetAllDistrictResponse, GetByIdDistrictResponse } from "../models/District/District";

class DistrictService {

    public apiUrl =  "distircts";


    getAll(): Promise<AxiosResponse<GetAllDistrictResponse, any>> {
		return axios.get<GetAllDistrictResponse>(this.apiUrl + "/getAll");
	}

	getById(id: number): Promise<AxiosResponse<GetByIdDistrictResponse, any>> {
		return axios.get<GetByIdDistrictResponse>(this.apiUrl +`/getById?id=${id}`); // düzelt
	}


	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}

export default new DistrictService();