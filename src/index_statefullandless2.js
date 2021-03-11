//basic state introduction
//Flux - Data -----[ flux flow ]-> View
import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


class Comment extends Component {

    state = {
        comment: {
            id: 1,
            name: 'Pradeep',
            like: 0,
            dislike: 0
        }
    };  

    onLike = () => {
        this.setState(state => {
            state.comment.like++;
            return state;
        });
    }

    onDislike = () => {
        this.setState(state => {
            state.comment.dislike++; 
            return state;
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Comment Application</h1>
                <CommentDisplayBoard {...this.state.comment} likeFn={this.onLike} dislikeFn={this.onDislike}/>
            </div>
        );
    }
}

//State Less component - Comment display board

const CommentDisplayBoard = (props) => (
    <div className="row">
        <div className="col-md-12 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <span className="badge badge-primary">{props.id} </span> {props.name}
                    </h5>
                    <p className="card-text">
                        Like: {props.like}
                    </p>
                    <p className="card-text">
                        Dislike: {props.dislike}
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <button onClick={props.likeFn} type="button" className="btn btn-primary mr-4">Like</button>
                <button onClick={props.dislikeFn} type="button" className="btn btn-danger">Dislike</button>
            </div>
        </div>
    </div>
)


render(<Comment />, root);