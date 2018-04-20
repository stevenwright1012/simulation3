import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){
    console.log(props);
    
    return(
        <div>
            <h1>Nav</h1>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to='/new'>
                <button>New Post</button>
            </Link>
            <Link to='/'>
                <button>Logout</button>
            </Link>
            {props.username}
            <img src={props.profileImg} alt=""/>
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