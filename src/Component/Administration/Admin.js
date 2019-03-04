import React, { Component } from 'react';
import Firebase from './Firebase';
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default class Admin extends Component {



    render() {
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">Administration</Typography>
                    <Button color="inherit">Page</Button>
                </Toolbar>
            </AppBar>
        </div>
    }
}