import React, { Component } from 'react'
import fot from '../img/foot.jpg'
// import { FaBeer } from '../react-icons/fa';

export default class foot extends Component {
    render() {
        return (
            <footer>
                <h2 className="fs-2">Get In Touch</h2>
               <div className="container one">
                   <div className="row col-12 mx-2 p-2">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-4 position-relative fs-4 text-warning">
                            <label for="validationTooltip01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationTooltip01" placeholder="Enter your valid First Name" required></input>
                            <div class="valid-tooltip">
                            </div>
                        </div>
                        <div class="col-md-4 position-relative fs-4 text-warning">
                            <label for="validationTooltip02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationTooltip02" placeholder="Enter your valid Last Name" required></input>
                            <div class="valid-tooltip">
                            </div>
                        </div>
                        <div class="col-md-4 position-relative fs-4 text-warning">
                        <label for="validationTooltip03" class="form-label">City</label>
                            <input type="text" class="form-control" placeholder="Enter your Valid City Name" id="validationTooltip03" required></input>
                            <div class="invalid-tooltip">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-6 position-relative fs-4 text-warning">
                            <label for="validationTooltipUsername" class="form-label">Email</label>
                            <div class="input-group has-validation">
                            <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Enter your Valid Email Id" aria-describedby="validationTooltipUsernamePrepend" required></input>
                            <div class="invalid-tooltip">
                                Please choose valid Email.
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 position-relative fs-4 text-warning">
                            <label for="validationTooltip04" class="form-label">State</label>
                            <select class="form-select" id="validationTooltip04" required>
                            <option selected disabled value="">Choose Your Valid State...</option>
                            <option>...</option>
                            </select>
                            <div class="invalid-tooltip">
                            Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 position-relative fs-4 text-warning">
                            <label for="validationTooltip05" class="form-label">Zip</label>
                            <input type="text" class="form-control" placeholder="Enter your Valid Zip Code" id="validationTooltip05" required></input>
                            <div class="invalid-tooltip">
                            Please provide a valid zip.
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-secondary p-2 fs-4 mt-3" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>

                   <div className="row2 mt-5">
                       <i className="fa fa-facebook"></i>
                        <p className="text-danger fs-2">Made By Atul Koirala</p>
                        {/* <FaBeer /> */}
                        
                    </div>  
                    </div>                   
            </footer>
        )
    }
}
