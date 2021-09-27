import React, { Component } from 'react'
import './Nav.css'
import '../App.css'
import home from '../img/home.jpg'
import about from '../img/about.png'
import cart from '../img/cart.jpg'
import log from '../img/Log.png'
import shop from '../img/shop.png'
import fun from '../img/fun.png'

class Navbar extends Component {
    render() {
        return (

            <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
      <img className="img-fluid img" src={fun}></img>
    <h1>Func Box</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse me-2" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ms-5">
        <li class="nav-item ms-5">
          <a class="nav-link active" aria-current="page" href="#"><img className="img-fluid d-block" src={home}></img>Home</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link active" href="#"><img className="img-fluid d-block" src={about}></img>About</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link active" href="#"><img className="img-fluid d-block" src={shop}></img>Shop</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link active" href="#"><img className="img-fluid d-block" src={log}></img>Login/Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

        )
    }
}

export default Navbar
