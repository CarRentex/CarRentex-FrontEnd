export interface CreateRentalRequest
{
    startDate: string;
    endDate: string;
    startLocationId: number;
    endLocationId: number;
    carID: number;
    userID: number;
}
