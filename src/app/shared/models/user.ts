
export type UserRequest = {
    results: User[];
    numberOfRows: number;
    statusCode: number;
}

export type User = {
    id: number;
    name: string;
    surname: string;
    birthdate?: Date;
    email: string;
    token?: string;
    remember_me_token: string | null;
    updated_at: Date;

 
}

export type UserLogin = {
    email: string;
    password: string;
}

export type Result = {
    token: string;
    user: User;
}

export type TokenResponse = {
    type: string;
    token: string;
    expires_ar: Date
}

export type UserResponse = {
    user : User;
    token: TokenResponse
}