import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css'

function Nav(props){
    console.log(props);
    
    return(
        <div className='sidebar'>
            <img src={props.profileImg} alt=""/>
            <br/>
            {props.username}
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

function mapStateToProps(state){
    return{
        username: state.username,
        profileImg: state.profileImg
    }
}

export default connect(mapStateToProps)(Nav)