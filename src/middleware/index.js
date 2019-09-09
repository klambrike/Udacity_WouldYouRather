import thunk from 'redux-thunk'
import logger from './logger'
import loadQuestions from './loadQuestionsForLoggedInUser'
import { applyMiddleware } from 'redux';

export default applyMiddleware(
    thunk,
    loadQuestions,
    logger
)