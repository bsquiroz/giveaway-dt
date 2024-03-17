export interface LoginData {
    email: string;
    password: string;
}

export interface ResponseLoginData {
    token: string;
    user: User;
}

export interface User {
    userId: number;
    fullname: string;
    email: string;
    avatar: string;
}
