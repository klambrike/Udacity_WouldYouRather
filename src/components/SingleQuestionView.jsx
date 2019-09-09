import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionRow from './QuestionRow'

class SingleQuestionView extends Component {
    render() {
        const { questionId, isShowStatistics } = this.props
        return(
            <div>
                <QuestionRow questionId={questionId} isShowPreview={false} isShowStatistics={isShowStatistics}/>
            </div>
        )
    }
}

function mapStateToProps({questions, auth}, props) {
    const { questionId } = props.match.params
    const question = questions[questionId]

    const isQuestionAnsweredByCurrentUser = question && (question.optionOne.votes.includes(auth.userId) || question.optionTwo.votes.includes(auth.userId))
    const isShowStatistics = question && (isQuestionAnsweredByCurrentUser || auth.userId === question.author)

    return {
        questionId,
        isShowStatistics
    }
}

export default connect(mapStateToProps)(SingleQuestionView)