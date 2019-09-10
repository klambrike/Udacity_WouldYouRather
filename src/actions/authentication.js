import { getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { AUTH_USER, GET_USER_LIST, LOG_OUT } from './types'

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