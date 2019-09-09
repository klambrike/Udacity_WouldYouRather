import React, { Component } from 'react'
import { connect } from 'react-redux';
import AnswerStatistics from './AnswerStatistics'

class AnsweredQuestionRow extends Component {

    render() {
        const { question, userSelectedOption } = this.props
        const optionOneAnswers = question.optionOne.votes.length
        const optionTwoAnswers = question.optionTwo.votes.length
        const totalAnswers = optionOneAnswers + optionTwoAnswers;
        const optionOneAnsweringPercentage = Math.round(optionOneAnswers * 100 / totalAnswers)
        const optionTwoAnsweringPercentage = Math.round(optionTwoAnswers * 100 / totalAnswers)

        return (
            <div>
                <AnswerStatistics
                    answerText={question.optionOne.text}
                    answersCountText={`${optionOneAnswers} out of ${totalAnswers} votes`}
                    answeringPercentage={optionOneAnsweringPercentage}
                    isSelectedOption={userSelectedOption === 'optionOne'}
                    />
                
                <AnswerStatistics
                    answerText={question.optionTwo.text}
                    answersCountText={`${optionTwoAnswers} out of ${totalAnswers} votes`}
                    answeringPercentage={optionTwoAnsweringPercentage}
                    isSelectedOption={userSelectedOption === 'optionTwo'}
                    />
            </div>
        )
    }
}

function mapStateToProps({questions, auth},{questionId}) {
    const question = questions[questionId]
    const userSelectedOption = question.optionOne.votes.includes(auth.userId) ? 'optionOne' : question.optionTwo.votes.includes(auth.userId) ? 'optionTwo' : null

    return {
        question,
        userSelectedOption
    }
}

export default connect(mapStateToProps)(AnsweredQuestionRow)