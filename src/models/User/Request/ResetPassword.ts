export interface ResetPassword {
    id: number;
    email: string;
    newPassword: string;
    confirmPassword: string;
}