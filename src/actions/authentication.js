import { getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const AUTH_USER = 'AUTH_USER'
export const GET_USER_LIST = 'GET_USER_LIST'
export const LOG_OUT = 'LOG_OUT'

export function setAuthedUser(userId) {
    return {
        type: AUTH_USER,
        userId
    }
}

export function loadUsers(users) {
    return {
        type: GET_USER_LIST,
        users
    }
}

export function getUserList() {
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers().then((users) => {
            dispatch(loadUsers(users))
            dispatch(hideLoading())
        })
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}