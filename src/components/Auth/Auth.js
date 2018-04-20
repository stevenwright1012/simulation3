import React, {Component} from 'react';
import axios from 'axios';
import {updateState} from '../../duck/reducer'
import {connect} from 'react-redux';

class Auth extends Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
    
    this.handlePassowrd = this.handlePassowrd.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    }
    handleUsername(e){
        this.setState({
            username: e
        })
    }
    handlePassowrd(e){
        this.setState({
            password: e
        })
    }
    register(){
        axios.post('/register', {username: this.state.username, password: this.state.password, profileImg: `https://robohash.org/${this.state.username}.png`}).then(res => {
            console.log(res.data);

            if(res.data[0]){
                const{username, profileimg, id} = res.data[0];
                this.props.updateState(id, username, profileimg)    
                this.props.history.push('/dashboard')
            }
        })
    }
    login(){
        axios.post('/login', {username: this.state.username, password:this.state.password}).then(res => {
            console.log(res.data);
            if(res.data[0]){    
                const{username, profileimg, id} = res.data[0];
                this.props.updateState(id, username, profileimg)    
                this.props.history.push('/dashboard')
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Auth</h1>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={(e) => this.handleUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={(e) => this.handlePassowrd(e.target.value)}/>
                </label>
                <br/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}


export default connect(null, {updateState})(Auth)