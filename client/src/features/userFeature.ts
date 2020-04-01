import { createAction, ActionType } from 'typesafe-actions';
import { User, defaultUsers } from '../models/user';

export const createUser = createAction('users/CREATE')<User>();
export const updateUser = createAction('users/UPDATE')<User>();
export const deleteUser = createAction('users/DELETE')<User>();

type UserActions = ActionType<typeof createUser | typeof updateUser | typeof deleteUser>;

export const usersReducer = (state: User[] = defaultUsers, action: UserActions) => {
    switch (action.type) {
        case 'users/CREATE':
            return [...state, { ...action.payload, id: new Date().getTime() }];
        case 'users/UPDATE':
            return state.map(u => (u.id === action.payload.id ? action.payload : u));
        case 'users/DELETE':
            return state.filter(u => u.id !== action.payload.id);
        default:
            return state;
    }
}