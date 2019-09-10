import { AUTH_USER } from '../actions/types';
import { handleLoadAllQuestions } from '../actions/questions'

const loadQuestions = (store) => (next) => (action) => {
    if(action.type === AUTH_USER && action.userId) {
        store.dispatch(handleLoadAllQuestions())
    }

    return next(action)
}

export default loadQuestions