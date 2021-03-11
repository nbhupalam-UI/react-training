//basic state introduction
//Flux - Data -----[ flux flow ]-> View
import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


class Comment extends Component {

    state = {
        id: 1,
        name: 'Pradeep',
        like: 0,
        dislike: 0,
        review: '',
        reviews: []
    };

    onLike = () => {
        this.setState(state => ({ like: state.like + 1 }));
    }

    onDislike = () => {
        let dislike = this.state.dislike + 1;
        this.setState({ dislike });
    }

    onUpdate = (event) => {
        let review = event.target.value;
        this.setState({ review });
    }

    onReviewSubmit = event => {
        //stops form submitting to server 
        event.preventDefault();
        let review = this.state.review;
        if (review !== '') {
            let reviewObj = {
                'text': review
            };

            this.setState(state => {
                return {
                    // reviews: state.reviews.concat(reviewObj),
                    reviews: [...state.reviews, reviewObj],
                    review: ''
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Comment Application</h1>
                <CommentDisplayBoard {...this.state} likeFn={this.onLike} dislikeFn={this.onDislike} />
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <form onSubmit={this.onReviewSubmit}>
                            <div className="form-group">
                                <label htmlFor="review">Enter Review</label>
                                <input type="text" id="review" className="form-control" placeholder="Enter review" onChange={this.onUpdate} value={this.state.review} />
                                <button type="submit" className="mt-2 btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 mt-4">
                        <ul>
                            {this.state.reviews.map((review, index) => (
                                <li key={index}>
                                    <span>{review.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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