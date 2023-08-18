export type UserRequest = {
    results: User[];
    numberOfRows: number;
    statusCode: number;
}

export type User = {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    email: string;
    status: string;
    avatar: string;
    recipes?: any[];
    token: string;
}

export type UserLogin = {
    email: string;
    password: string;
}

export type UserResponse = {
    result : {token: string, user: User}
    statusCode: number
}