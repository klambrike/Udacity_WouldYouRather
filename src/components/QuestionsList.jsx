import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionRow from './QuestionRow'

class QuestionsList extends Component {
    render() {
        const { questions, isShowStatistics } = this.props

        return(
            <ul>
                {questions.map( question => <QuestionRow key={question.id} questionId={question.id} isShowStatistics={isShowStatistics}/>)}
            </ul>
        )
    }
}

function mapStateToProps({questions, auth}, {excludeCurrentUser, showAnsweredQuestions}) {
    const currentUser = auth.users[auth.userId]

    let questionsList = Object.values(questions)
    if(excludeCurrentUser) {
        questionsList = questionsList.filter( question => question.author !== currentUser.id)
    }

    questionsList = questionsList.filter( question => {
        const userHasAnsweredCurrentQuestion = question.optionOne.votes.includes(currentUser.id) || question.optionTwo.votes.includes(currentUser.id)
        const filterByAnswered = showAnsweredQuestions ? userHasAnsweredCurrentQuestion  : !userHasAnsweredCurrentQuestion

        return filterByAnswered
    }).sort((a, b) => b.timestamp - a.timestamp)

    return {
        questions: questionsList,
        isShowStatistics: showAnsweredQuestions
    }
}

export default connect(mapStateToProps)(QuestionsList)

