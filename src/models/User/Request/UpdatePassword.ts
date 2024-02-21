export interface UpdatePassword {
    id: number;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}