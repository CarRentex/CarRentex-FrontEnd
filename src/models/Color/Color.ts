export interface CreateColorRequest {
    name: string;
}

export interface UpdateColorRequest {
    id?: number;
    name?: string;
}

export interface GetAllColorResponse {
    id?: number;
    name?: string;
}

export interface GetByIdColorResponse {
    id?: number;
    name?: string;
}

export interface CreateColorResponseType {
}

export interface UpdateColorResponseType {
}