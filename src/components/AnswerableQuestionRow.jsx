import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './AnswerableQuestionRow.css'
import { handleAnswerQuestion } from '../actions/questions';

class AnswerableQuestionRow extends Component {
    state = {
        selectedAnswer: null,
        answerSent: false
    }

    onSelectionMade = (e) => {
        this.setState({
            selectedAnswer: e.target.value
        })
    }

    handleAnswerQuestion = (e) => {
        e.preventDefault()
        const { currentUserId, question } = this.props
        const { selectedAnswer } = this.state

        this.setState({
            answerSent: true
        })
        this.props.dispatch(handleAnswerQuestion(currentUserId, question.id, selectedAnswer))
    }

    render() {
        const { question } = this.props
        const { selectedAnswer, answerSent } = this.state
        return (
            <div>
                <div className='radio-select'>
                    <input type='radio' checked={selectedAnswer === 'optionOne'} onChange={this.onSelectionMade} value='optionOne' disabled={answerSent}/>
                    <span>{question.optionOne.text}</span>
                </div>
                <span className='answer-options font-weight-bold'>OR</span>
                <div className='radio-select'>
                    <input type='radio' checked={selectedAnswer === 'optionTwo'} onChange={this.onSelectionMade} value='optionTwo' disabled={answerSent}/>
                    <span>{question.optionTwo.text}</span>
                </div>
                <Button variant='primary' onClick={this.handleAnswerQuestion} disabled={answerSent || selectedAnswer === null}>Answer</Button>
            </div>
        )
    }
}

function mapStateToProps({ questions, auth }, { questionId }) {
    const question = questions[questionId]

    return {
        question,
        currentUserId: auth.userId
    }

}

export default connect(mapStateToProps)(AnswerableQuestionRow)