import { Gender } from './gender';

export interface User {
    id: number,
    forname: string,
    surname: string,
    email: string,
    birthday: number,
    gender: Gender,
}

export interface UserDraft extends User {
    
}