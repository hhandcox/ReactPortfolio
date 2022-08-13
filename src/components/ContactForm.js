import React from "react";
import { col, row } from 'reactstrap';

const ContactForm = () => {
    return (
        <>
            <div class="container contact mx-auto">
                <div class="row formAll">
                    <div class="col-md-3 d-none d-md-block">
                        <div class="contact-info ">
                            <p><i class="fa-brands fa-connectdevelop fa-5x"></i></p>
                            <h2>Contact Me</h2>
                            <h4>I would love to hear from you!</h4>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-9 contactBorder">
                        <div class="contactMe d-xs-block d-md-none text-dark d-flex justify-content-center">Contact Me</div>
                        <div class="contact-form">
                            <div class="form-group">
                            <label class="control-label col-sm-2" for="first-name">First Name:</label>
                            <div class="col-sm-10">          
                                <input type="text" class="form-control" id="first-name" placeholder="Enter First Name" name="first-name" />
                            </div>
                            </div>
                            <div class="form-group">
                            <label class="control-label col-sm-2" for="last-name">Last Name:</label>
                            <div class="col-sm-10">          
                                <input type="text" class="form-control" id="last-name" placeholder="Enter Last Name" name="last-name" />
                            </div>
                            </div>
                            <div class="form-group">
                            <label class="control-label col-sm-2" for="email">Email:</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            </div>
                            <div class="form-group">
                            <label class="control-label col-sm-2" for="comment">Comment:</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                            </div>
                            <div class="form-group">        
                            <div class="col col-sm-10">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;