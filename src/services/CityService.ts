import { AxiosResponse } from "axios";
import { axios } from "../lib/axios";
import { GetAllCityAndDistrictResponse, GetAllCityResponse } from "../models/City/City";

class CityService {

    public apiUrl =  "cities";


    getAll(): Promise<AxiosResponse<GetAllCityResponse, any>> {
		return axios.get<GetAllCityResponse>(this.apiUrl + "/getAll");
	}

/* 	getById(id: number): Promise<AxiosResponse<GetById, any>> {
		return axios.get<GetByIdType>(this.apiUrl +`/getById?id=${id}`); // düzelt
	}
 */
	getAllCities(): Promise<AxiosResponse<GetAllCityAndDistrictResponse, any>> {
		return axios.get<GetAllCityAndDistrictResponse>(this.apiUrl + "getAllCities"); // düzelt
	}

	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}

export default new CityService();