import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { connect } from 'react-redux'
import { logOut } from '../actions/authentication'

function NavigationBar(props) {
    const [logoutClicked, setLogoutClicked] = useState(false)
    const { userName } = props

    const handleLogout = (dispatch) => {
        dispatch(logOut())
        setLogoutClicked(true)
    }

    const redirect = () => {
        setLogoutClicked(false)
        return <Redirect to='/'/>
    }
    
    return (
        <Fragment>
        { !!!userName && logoutClicked && redirect }
        <Navbar bg='dark' variant='dark' fixed='top'>
            <Nav className="mr-auto">
                <NavItem href="/">
                    <Nav.Link as={Link} to="/" exact='true'>Home</Nav.Link>
                </NavItem>
                <NavItem href="/leaderboard">
                    <Nav.Link as={Link} to="/leaderboard">Leaderboards</Nav.Link>
                </NavItem>
                <NavItem href="/add">
                    <Nav.Link as={Link} to="/add">Add question</Nav.Link>
                </NavItem>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {formatSignedInName(userName)}
                </Navbar.Text>
                {userName &&
                    <NavItem href="/" onClick={() => handleLogout(props.dispatch)}>
                        <Nav.Link >Logout</Nav.Link>
                    </NavItem>
                }
            </Navbar.Collapse>
        </Navbar>
        </Fragment>
    )
}

function formatSignedInName(userName) {
    return !userName ? 'Not signed in' : (<Fragment>Signed in as: <b>{userName}</b></Fragment>)
}

function mapStateToProps({ auth }) {
    const user = auth.users[auth.userId]
    return {
        userName: user && user.name
    }
}

export default connect(mapStateToProps)(NavigationBar)