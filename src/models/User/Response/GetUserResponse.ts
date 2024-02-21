export interface GetAllUserResponse {
    id: number;
    email: string;
    phoneNumber: string;
    address: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    cityName: string;
    districtName: string;
    active: boolean;
}


export interface GetByIdUserResponse {
    email: string;
    phoneNumber: string;
    address: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    cityName: string;
    districtName: string;
    active: boolean;
}