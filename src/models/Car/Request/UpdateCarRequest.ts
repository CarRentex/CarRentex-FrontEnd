export interface UpdateCarRequest {
    id: number;
    kilometer: number;
    year: number;
    dailyPrice: number;
    plate: string;
    minFindeksRate: number;
    imagePath: string;
    passengerCapacity: number;
    category: string;
    gearType: string;
    fuelType: string;
    colorId: number;
    modelId: number;
    active: boolean;
}