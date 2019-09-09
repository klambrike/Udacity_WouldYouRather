import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardRow from './LeaderBoardRow'
import { getUserList } from '../actions/authentication';
import { getUserScore } from './LeaderBoardUtil'
import './LeaderBoards.css'

class LeaderBoards extends Component {
    componentDidMount() {
        this.props.dispatch(getUserList())
    }

    render() {
        const {users} = this.props
        return(
            <div className='LeaderBoards'>
                <h1>Leaderboard</h1>
                {users.map((user, userPlace) => <LeaderBoardRow key={user.id} user={user} place={userPlace}/>)}
            </div>
        )
    }
}



function mapStateToProps({auth}) {
    const users = Object.values(auth.users).sort((a,b) => getUserScore(b) - getUserScore(a))

    return {
        users
    }

}

export default connect(mapStateToProps)(LeaderBoards)