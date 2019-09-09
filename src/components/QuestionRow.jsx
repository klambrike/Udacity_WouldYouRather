import React,  { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Row, Col } from 'react-bootstrap'
import AnswerableQuestionRow from './AnswerableQuestionRow'
import AnsweredQuestionRow from './AnsweredQuestionRow'
import QuestionPreview from './QuestionPreview'
import './QuestionRow.css'

class QuestionRow extends Component {

    render() {
        const { question, author, isShowPreview, isShowStatistics, currentUserId } = this.props

        const getTitle = (author, currentUser) => {
            if(author.id === currentUser) {
                return 'You wanted to know'
            }
            else return `${author.name} wants to know`
        }

        if(!question) {
            return(
                <div>So sorry, but we can't seem to locate this question.</div>
            )
        }
        else return (
            <li key={question.questionId}>
                <Card>
                    <Card.Header>{getTitle(author, currentUserId)}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className='QuestionRow-author'>
                                <Image src={process.env.PUBLIC_URL + author.avatarURL} roundedCircle className='QuestionRow-author-image'/>
                            </Col>
                            <Col xs={9}>
                                <Card.Title>Would you rather...</Card.Title>
                                {
                                    isShowStatistics ?
                                        <AnsweredQuestionRow questionId={question.id}/>
                                    :
                                    isShowPreview ?
                                        <QuestionPreview
                                            questionAnswerOne={question.optionOne.text}
                                            questionAnswerTwo={question.optionTwo.text}
                                            questionId={question.id}
                                            />
                                    :
                                    <AnswerableQuestionRow questionId={question.id}/>
                                }
                                
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </li>
        )
    }
}

function mapStateToProps({questions, auth}, {questionId, isShowPreview = true, isShowStatistics = false}) {
    const question = questions[questionId]
    const author = question && auth.users[question.author]

    return {
        question,
        author,
        isShowPreview,
        isShowStatistics,
        currentUserId: auth.userId
    }

}

export default connect(mapStateToProps)(QuestionRow)