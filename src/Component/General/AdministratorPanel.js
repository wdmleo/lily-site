import React, { Component } from 'react';
import Firebase from './Firebase'

export default class AdministratorPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: false
        }
    }

    componentWillMount() {
        if (Firebase.auth().currentUser != null) {
            this.setState({isAuth: true});
        }
    }

    render() {

    }
}