import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateState} from '../../duck/reducer'
import axios from 'axios';
import './Nav.css'

class Nav extends React.Component{
    componentDidMount(){
        axios.get('/api/auth/me').then(res => {
            // console.log(res.data.username, res.data.profileimg, res.data);
            
            this.props.updateState(res.data.username, res.data.profileimg)
        })
    }
    render(){
        console.log(this.props);
        
            return(
                <div className='sidebar'>
                <img src={this.props.profileImg} alt=""/>
                <br/>
                {this.props.username}
                <br/>
                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>
                <Link to='/new'>
                    <button>New Post</button>
                </Link>
                <Link to='/'>
                    <button className='bottom'>Logout</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.username,
        profileImg: state.profileImg
    }
}

export default connect(mapStateToProps, {updateState})(Nav)