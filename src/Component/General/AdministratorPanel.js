import React, { Component } from 'react';
import Firebase from './Firebase'
import { withRouter } from 'react-router-dom';

import '../../Style/admin.css'
import { Button } from '@material-ui/core';

export default withRouter(class AdministratorPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: false
        }
    }

    componentWillMount() {
        if (Firebase.auth().currentUser != null) {
            this.setState({
                isAuth: true,
                user: Firebase.auth().currentUser
            });
        }
        Firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.setState({
                    isAuth: true,
                    user: user
                });
            }
            else {
                this.setState({
                    isAuth: false,
                    user: null
                })
            }
        })
    }

    render() {
        return (
            <div className="admin-panel">
                <div>
                    <Button onClick={()=>{this.props.history.push('/admin')}}>Administration</Button>
                </div>
                <div>
                    Bienvenue, { this.state.user ? this.state.user.email : '' }
                </div>
            </div>
        );
    }
})