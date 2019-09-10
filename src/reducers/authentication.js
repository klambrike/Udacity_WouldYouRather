import { AUTH_USER, GET_USER_LIST, LOG_OUT } from "../actions/types";

export default function authentication(state = {users: {}}, action) {
    switch(action.type) {
        case AUTH_USER: {
            return {
                ...state,
                userId: action.userId
            }
        }
        case GET_USER_LIST: {
            return {
                ...state,
                users: action.users
            }
        }

        case LOG_OUT: {
            return {
                users: state.users
            }
        }

        default: {
            return state
        }
    }
}