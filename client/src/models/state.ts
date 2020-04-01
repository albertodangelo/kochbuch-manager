import { User } from './user';

export interface State {
    users: User[];
}

export const initialState: State = {
    users: []
}