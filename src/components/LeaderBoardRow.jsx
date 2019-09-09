import React, { Component } from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import './LeaderBoardRow.css'
import { getUserScore } from './LeaderBoardUtil'

class LeaderBoardRow extends Component {

    render() {
        const { user, place } = this.props

        const getMedalColor = (userPlace) => {
            switch (userPlace) {
                case 0:
                    return 'gold'
                case 1:
                    return 'silver'
                case 2:
                    return 'burlywood'
                default:
                    return 'lawngreen'
            }
        }

        return (
            <li key={user.id} className='LeaderBoardRow'>
                <Card>
                    <div className='LeaderBoardRow-user-place' style={{ "--leaderboard-medal-color": getMedalColor(place) }}>{place+1}</div>
                    <Card.Body>
                        <Row className='LeaderBoardRow-row'>
                            <Col className='LeaderBoardRow-user'>
                                <Image src={process.env.PUBLIC_URL + user.avatarURL} roundedCircle className='QuestionRow-author-image' />
                            </Col>
                            <Col xs={9}>
                                <div className='LeaderBoardRow-score-data'>
                                    <div className='LeaderBoardRow-user-name'>{user.name}</div>
                                    <div className='LeaderBoardRow-general-data'>{`Questions: ${user.questions.length}`}</div>
                                    <div className='LeaderBoardRow-general-data'>{`Answers: ${Object.keys(user.answers).length}`}</div>
                                    <div className='LeaderBoardRow-score'>{`Score: ${getUserScore(user)}`}</div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </li>
        )
    }
}

export default LeaderBoardRow