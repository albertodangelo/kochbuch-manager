import { User } from './user';
import { Recipe } from './recipe';

export interface State {
    users: User[];
    recipies: Recipe[];
}

export const initialState: State = {
    users: [],
    recipies: []
}