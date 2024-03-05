import { axiosInstance } from './../lib/axios';
import { AxiosResponse } from "axios";
import { GetAllCityAndDistrictResponse, GetAllCityResponse } from "../models/City/City";

class CityService {

    public apiUrl =  "cities";


    getAll(): Promise<AxiosResponse<GetAllCityAndDistrictResponse, any>> {
		return axiosInstance.get<GetAllCityAndDistrictResponse>(this.apiUrl + "/getAll");
	}

/* 	getById(id: number): Promise<AxiosResponse<GetById, any>> {
		return axiosInstance.get<GetByIdType>(this.apiUrl +`/getById?id=${id}`); // düzelt
	}
 */
	getAllCities(): Promise<AxiosResponse<GetAllCityResponse, any>> {
		return axiosInstance.get<GetAllCityResponse>(this.apiUrl + "getAllCities"); // düzelt
	}

	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/" + id);
	}
}

export default new CityService();