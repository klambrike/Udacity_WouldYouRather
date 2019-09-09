import { addQuestion, getQuestions, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading";

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const QUESTION_ADDED = 'QUESTION_ADDED'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'

export function handleAddNewQuestion(author, optionA, optionB) {
    return (dispatch) => {
        return addQuestion(author, optionA, optionB).then(question => {
            dispatch(handleLoadAllQuestions())
        })
    }
}


function loadQuestions(questions) {
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}

export function handleLoadAllQuestions() {
    return(dispatch) => {
        return getQuestions().then(questions => {
            dispatch(loadQuestions(questions))
        })
    }
}

function answerQuestion( answererId, questionId, answer ) {
    return saveQuestionAnswer( answererId, questionId, answer )
}

function questionAnswered() {
    return {
        type: QUESTION_ANSWERED
    }
}

export function handleAnswerQuestion( answererId, questionId, answer ) {
    return(dispatch) => {
        dispatch(showLoading())
        answerQuestion(answererId, questionId, answer)
            .then(() => {
                dispatch(questionAnswered())
                dispatch(handleLoadAllQuestions())
                dispatch(hideLoading())
            })
    }
}