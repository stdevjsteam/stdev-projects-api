export interface UserAttributes {
    readonly id?: number;
    readonly email: string;
    readonly password: string;
    readonly isAdmin: boolean;
}