import { axiosInstance } from './db_connect';
import { User } from "../models/user";

export const indexUsersClient = () => {
    return axiosInstance.get<User[]>('users');
};

export const createUserClient = (user: User) => {
    return axiosInstance.post<User>('users', user);
}

export const updateUserClient = (user: User) => {
    return axiosInstance.put<User>(`users/${user.id}`, user);
}

export const deleteUserClient = (user: User) => {
    return axiosInstance.delete<User>(`users/${user.id}`);
}