import React, { Component } from 'react';
import Firebase from '../General/Firebase';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, TextField, Paper, Grid } from '@material-ui/core';

import Editor from './Editor';

class Pages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: false,
            user: null
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
                this.props.history.push('/admin');
            }
        })
    }

    handleChangeForm(formInput, value) {
        this.setState((prev)=>{
            prev.form[formInput] = value;
            return prev;
        })
    }

    render() {
        let buttons = [];
        if (this.state.isAuth) {
            buttons.push((<Button color="inherit" onClick={()=>{this.props.history.push('/admin')}}>Tableau de bord</Button>));
            buttons.push((<Button color="inherit">Se déconnecter</Button>));
        }

        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">Administration</Typography>
                        {buttons}
                    </Toolbar>
                </AppBar>
                <Editor />
            </div>
        );
    }
}

export default withRouter(Pages);