export  interface CreateRegister{
	name: string;
	surname: string;
	companyName?: string;
	taxNo?: string;
	nationality?:string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	cityId: number;
	districtId: number;
	address: string;
	role: string;
}
