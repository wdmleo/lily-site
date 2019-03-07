import React, { Component } from 'react';
import Firebase from '../General/Firebase';
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, TextField, Paper, Grid } from '@material-ui/core';

import { FacebookProvider, Page } from 'react-facebook';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import InstagramFeed from 'react-instagram-feed';

import '../../Style/admin.css'

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: false,
            user: null,
            error: false,
            form: {
                email: '',
                password: ''
            }
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

    handleChangeForm(formInput, value) {
        this.setState((prev)=>{
            prev.form[formInput] = value;
            return prev;
        })
    }

    handleFormSubmit() {
        Firebase.auth().signInWithEmailAndPassword(this.state.form.email, this.state.form.password).catch((error)=>{
            this.setState({
                error: true
            })
        })
    }

    render() {
        let buttons = [];
        if (this.state.isAuth) {
            buttons.push((<Button color="inherit" onClick={()=>{this.props.history.push('/admin/pages')}}>Pages</Button>));
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
                {
                    !this.state.isAuth ?
                    (
                        <Paper className="login-form">
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Connection</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={ this.state.error }
                                        type="email"
                                        value={this.state.form.email}
                                        onChange={(e)=>{this.handleChangeForm('email', e.target.value)}}
                                        label="E-mail"
                                        required 
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={ this.state.error }
                                        type="password"
                                        value={this.state.form.password}
                                        onChange={(e)=>{this.handleChangeForm('password', e.target.value)}}
                                        label="Mot de passe"
                                        required
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        color="primary"
                                        variant="raised"
                                        fullWidth
                                        onClick={this.handleFormSubmit.bind(this)}
                                        >Se connecter</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ) : 
                    <div className="social-container">
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <div className="relative-container">
                                    <div className="social">
                                        <FacebookProvider appId="998446793612727">
                                            <Page className="facebook" width={500} height={750} href="https://www.facebook.com/liselinel/" tabs="timeline" />
                                        </FacebookProvider>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="relative-container">
                                    <div className="social">
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName="LiseLineL"
                                            options={{
                                                height: 750,
                                                width: 500
                                            }}
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="relative-container">
                                    <div className="social">
                                        <Typography variant="display1">Fais les mails connard.</Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        );
    }
}

export default Admin;