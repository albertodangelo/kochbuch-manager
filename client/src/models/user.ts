import { Gender } from './gender';

export interface User {
    id: number,
    forname: string,
    surname: string,
    email: string,
    birthday: number,
    gender: Gender,
}

export const defaultUsers: User[] = [
    /* {
        id: 0,
        forname: "Chuck",
        surname: "Norris",
        birthday: new Date().getTime(),
        email: "chuck@norris.com",
        gender: Gender.MALE
    },
    {
        id: 1,
        forname: "Scarlett",
        surname: "Johanson",
        birthday: new Date().getTime(),
        email: "scarlett@johanson.com",
        gender: Gender.FEMALE
    },
    {
        id: 3,
        forname: "Madonna",
        surname: "Pop",
        birthday: new Date().getTime(),
        email: "madonna@johanson.com",
        gender: Gender.FEMALE
    } */
  ];

export interface UserDraft extends User {
    
}