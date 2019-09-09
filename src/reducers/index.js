import { combineReducers } from 'redux'
import authentication from './authentication'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    auth: authentication,
    loadingBar: loadingBarReducer,
    questions: questions
})