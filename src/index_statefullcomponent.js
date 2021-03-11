//basic state introduction
//Flux - Data -----[ flux flow ]-> View
import React, { Component } from 'react';
import { render } from 'react-dom';


class Comment extends Component {

    state = {
        id: 1,
        name: 'Pradeep',
        like: 0,
        dislike: 0
    };

    // Instance variable

    // likeFunction = this.onLike.bind(this);

    // onLike() {
    //     console.log('Button is clicked');
    // }

    onLike = () => {
        // this.state.like = this.state.like + 1; //will not work
        // console.log(this.state.like);
        this.setState((state) => {
            state.like++;
            return state;
        });
    }

    onDislike = () => {
        let dislike = this.state.dislike + 1;
        // this.setState({dislike: this.state.dislike + 1});
        // this.setState({ dislike: dislike });
        this.setState({ dislike });
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Comment Application</h1>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="badge badge-primary">{this.state.id} </span> {this.state.name}
                                </h5>
                                <p className="card-text">
                                    Like: {this.state.like}
                                </p>
                                <p className="card-text">
                                    Dislike: {this.state.dislike}
                                </p>
                                <button onClick={this.onLike} type="button" className="btn btn-primary mr-4">Like</button>
                                <button onClick={this.onDislike} type="button" className="btn btn-danger">Dislike</button>
                                {/* <button onClick={() => {
                                    console.log('Disliked')
                                }} type="button" className="btn btn-danger">Dislike</button> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
render(<Comment />, root);