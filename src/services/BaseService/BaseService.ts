import { AxiosResponse } from "axios";
import { axios } from "../../lib/axios";

export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(): Promise<AxiosResponse<GetAllType, any>> {
		return axios.get<GetAllType>(this.apiUrl + "/getAll");
	}

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		return axios.get<GetByIdType>(this.apiUrl +`/getById?id=${id}`); // düzelt
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axios.post<AddResponseType>(this.apiUrl + "/create", request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axios.put<UpdateResponseType>(this.apiUrl + "/update", request);
	}

	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}