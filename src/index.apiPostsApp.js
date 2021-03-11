import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


class Post extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        const apiUrl = 'http://localhost:3001/posts/';
        fetch(apiUrl).then(response => response.json())
            .then(posts => {
                this.setState((state) => {
                    return {
                        posts: state.posts.concat(posts)
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Post Application!!!</h1>
                <ul>
                    {
                        this.state.posts.map((post, index) => {
                            return (
                                <li key={index}>
                                    <p>Id: {post.id}</p>
                                    <p>Title: {post.title}</p>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

render(<Post />, root);