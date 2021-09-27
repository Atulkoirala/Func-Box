import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import fir from '../img/First.jpg'
import cart from '../img/cart.jpg'
import pause from '../img/pause.jpg'
import ship from '../img/ship.png'
import new1 from '../img/new.png'
import school from '../img/school.jpg'
import { Collapse } from 'bootstrap';


function First()  {
    
        return (
            <section className="container">
                <button className="btn1 rounded-pill rounded-end position-fixed top-15 end-0"><img className="ms-3 aa" src={cart}></img>Go to Cart</button>
                <div className="my-3 col-12 my-4">
                
                    <div class="row g-0">
                        <div class="col-md-5">
                        <img src={fir} class="img-fluid rounded-circle img1 ms-3" alt="..."></img>
                        </div>
                        
                        <div class="col-md-7 my-auto">
                        <div class="card-body">
                            <h5 class="card-title fs-3">Func Box</h5>
                            <div class="card-text1 text-black my-3 mx-4 text-start">
                                <p>FuncBox is a box full of surprises which will teach you educational concepts and coding with a revolutionary twist.</p>
                                <p>Perfect for age-group 6-12 years.</p>
                                <p>Build your own fun games.</p>
                                <p>Learn to code and explore.</p>
                                <p>Share your game with your friends.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                <div className="row1 col-12 p-3 my-3">
                    <div className="col-4 col-sm-12 col-md-4 col-lg-4 text-danger">
                        <h2><img className="img-fluid me-2 me-sm-4" src={ship}></img>Free Shipping</h2>
                    </div>
                    <div className="col-4 col-sm-12 col-md-4 col-lg-4 text-danger">
                        <h2><img className="img-fluid me-2" src={new1}></img>No Exprience Needed</h2>
                    </div>
                    <div className="col-4 col-sm-12 col-md-4 col-lg-4 text-danger">
                        <h2><img className="img-fluid me-2" src={pause}></img>Cancel Anytime</h2>
                    </div>
                    </div>

                    <h2 className="text-center fs-1 my-3">Plan</h2>

                    <div className="row p-3">
                        <div className="col-4 col-sm-12 col-md-4 col-lg-4 bg-danger mb-1 mt-2">
                        <p>
                        <button class="btn btn-danger w-50 p-2 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Basic
                        </button>
                            </p>
                            <div class="collapse " id="collapseExample">
                                    <div class="card text-start mx-5 item-center">
                                        <li>FuncBox Blinder</li>
                                        <li>3 mathematical apps</li>
                                        <li>3 Scientific apps</li>
                                        <li>3 game apps</li>
                                        <li>Stickers</li>
                                        <li>Kickstart guide</li>
                                        <li>Interactive website Blinder</li>
                                    </div>
                            </div>
                            <div className="fs-5 text-center text-black mt-1">
                                        <p>Monthly a/Monthly</p>
                                        <p>Quartely a/Monthly</p>
                                        <p>Half-yearly a/Monthly</p>
                                        <p>Yearly a/Monthly</p>
                                    </div>
                            </div>
                        <div className="col-4 col-sm-12 col-md-4 col-lg-4 bg-warning mb-1 mt-2">
                            <p>
                            <button class="btn btn-warning w-50 p-2 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                Standard
                            </button>
                                </p>
                                <div class="collapse" id="collapseExample2">
                                    <div class="card text-start mx-5 item-center">
                                        <li>FuncBox Blinder</li>
                                        <li>3 mathematical apps</li>
                                        <li>3 Scientific apps</li>
                                        <li>3 game apps</li>
                                        <li>Stickers</li>
                                        <li>Kickstart guide</li>
                                        <li>Interactive website Blinder</li>
                                    </div>
                                </div>
                                <div className="fs-5 text-center text-black mt-1">
                                        <p>Monthly a/Monthly</p>
                                        <p>Quartely a/Monthly</p>
                                        <p>Half-yearly a/Monthly</p>
                                        <p>Yearly a/Monthly</p>
                                    </div>
                        </div>
                        <div className="col-4 col-sm-12 col-md-4 col-lg-4 bg-success mb-1 mt-2">
                            <p>
                                <button class="btn btn-success w-50 p-2 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                    Premium
                                </button>
                                <div class="collapse col-sm-12" id="collapseExample3">
                                    <div class="card text-start my-3 mx-5 item-center">
                                        <li>FuncBox Blinder</li>
                                        <li>3 mathematical apps</li>
                                        <li>3 Scientific apps</li>
                                        <li>3 game apps</li>
                                        <li>Stickers</li>
                                        <li>Kickstart guide</li>
                                        <li>Interactive website Blinder</li>
                                    </div>
                                    </div>
                                    <div className="fs-5 text-center text-black mt-1">
                                        <p>Monthly a/Monthly</p>
                                        <p>Quartely a/Monthly</p>
                                        <p>Half-yearly a/Monthly</p>
                                        <p>Yearly a/Monthly</p>
                                    </div>
                                    </p>                                                         
                            </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <h2 className="text-center fs-1 my-3">Frequently Asked Questions</h2>
                    <div className="ques text-start my-4 py-3">
                        <h5 className="fs-3 text-danger">What age is Funcbox for?</h5>
                        <p className="fs-5">Funcbox is designed for kids 6-12 years in age.</p>
                        <h5 className="fs-3 text-danger">What age is Funcbox for?</h5>
                        <p className="fs-5">Funcbox is designed for kids 6-12 years in age.</p>
                        <h5 className="fs-3 text-danger">What age is Funcbox for?</h5>
                        <p className="fs-5">Funcbox is designed for kids 6-12 years in age.</p>
                        <h5 className="fs-3 text-danger">What age is Funcbox for?</h5>
                        <p className="fs-5">Funcbox is designed for kids 6-12 years in age.</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="container-fluid">
                    <h2 className="text-center fs-1 my-2">For Schools</h2>
                    <div class="cardl mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                            <img src={school} class="img-fluid img1" alt="..."></img>
                            </div>
                            <div class="box col-md-7 m-auto">
                            <div class="cardl m-auto">
                                <p class="card-text fs-4 mx-5">Yay! FuncBox brings special discount for all the School Tie-ups. FuncBox can be easily incorporated in all the school grades. To make your students outperform and help your institute gain an edge over the others contact our team NOW!</p>
                                <button className="btn btn-outline-primary">Readmore</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    export default First