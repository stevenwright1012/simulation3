import React, {Component} from 'react';
import './Post.css'

class Post extends Component{
    render(){
        return(
            <div>
                <h2>Title: {this.props.title}</h2>
                <h3>By: {this.props.author}</h3>
                <img src={this.props.picture} alt=""/>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Post