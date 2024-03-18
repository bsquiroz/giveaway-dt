export interface DataFormUser {
    fullname: string;
    email: string;
    password: string;
    avatar?: string;
}

export type DataColumn = {
    email: string;
    fullname: string;
};

export interface DataCreateUser {
    token: string;
    dataUser: DataFormUser;
}
