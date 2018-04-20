import React, {Component} from 'react';
import Post from '../Post/Post';
// import {connect} from 'react-redux';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            searchValue: '',
            posts: [],
            myposts: true
        }
    }
    componentDidMount(){
        axios.get('/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    render(){
        var displayPosts = this.state.posts.map((post, i) => {
            return <Post key={i}
            title={post.title}
            author={post.username}
            picture={post.profileimg}
            message={post.message}/>
        })        
        return(
            <div>
                <input type="text" placeholder='Search by Title' value={this.state.searchValue}/>
                <button>search</button>
                <button>Reset</button>
                <label>My posts
                    <input type="checkbox" checked/>
                </label>
                {displayPosts}
            </div>
        )
    }
}

export default Dashboard