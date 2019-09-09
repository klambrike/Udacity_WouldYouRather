import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from './_DATA.js'

export function getUsers() {
    return _getUsers()
}

export function getQuestions() {
    return _getQuestions()
}

export function addQuestion(author, optionA, optionB) {
    return _saveQuestion({optionOneText: optionA, optionTwoText: optionB, author})
}

export function saveQuestionAnswer( answererId, questionId, answer ) {
    return _saveQuestionAnswer({
        authedUser: answererId,
        qid: questionId,
        answer
    })
}