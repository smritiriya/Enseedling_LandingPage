
import React from 'react'
import { Rectangle } from '../assets';

const Blogs = () => {
    const cardDeck = {
        // border: "2px solid black",
        padding: "4rem"
    }
    const blog = {
        // border: "2px solid black",
        padding: "2rem"
    }
    return (
        <>
            <div className="blog" style={blog}> 
                <h1 className="text-center ">"Blogs"</h1>
                <div className="card-deck d-flex" style={cardDeck}>
                    <div className="card m-4 text-center">
                        <img
                            className="card-img-top"
                            src={Rectangle}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card m-4 text-center">
                        <img
                            className="card-img-top"
                            src={Rectangle}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card m-4 text-center">
                        <img
                            className="card-img-top"
                            src={Rectangle}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card m-4 text-center">
                        <img
                            className="card-img-top"
                            src={Rectangle}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                        <div className="card-footer justify-between">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;