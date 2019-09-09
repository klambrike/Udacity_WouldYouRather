import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import './UserRow.css'

class UserRow extends Component {
    render() {
        const { user } = this.props

        return(
            <li key={user.id} className='UserRow'>
                <button>
                    <Image src={process.env.PUBLIC_URL + user.avatarURL} roundedCircle/>
                    <span>{user.name}</span>
                </button>
            </li>
        )
    }
}

function mapStateToProps({auth}, {userId}) {
    const user = auth.users[userId]

    return {
        user
    }
}

export default connect(mapStateToProps)(UserRow)