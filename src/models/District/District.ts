

//sadece ilçeleri getirir
export interface GetAllDistrictResponse {
    id: number;
    name: string;
}

// verilen id deki ilçeleri getirir
export interface GetByIdDistrictResponse {
    name: string;
}