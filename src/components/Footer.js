import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="col-md-12 footer-box">
                        <div className="row small-box ">
                        <strong>Mobiles :</strong> <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> | 
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |
                        <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  <a href="/">Sony</a> | 
                        <a href="/">Microx</a> |<a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  
                        <a href="/">Sony</a> | <a href="/">Microx</a> | view all items
                        </div>
                        <div className="row small-box ">
                        <strong>Laptops :</strong> <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx Laptops</a> | 
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |
                        <a href="/">Sony Laptops</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  <a href="/">Sony</a> | 
                        <a href="/">Microx</a> |<a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  
                        <a href="/">Sony</a> | <a href="/">Microx</a> | view all items
                        </div>
                        <div className="row small-box ">
                        <strong>Tablets : </strong><a href="/">samsung</a> |  <a href="/">Sony Tablets</a> | <a href="/">Microx</a> | 
                        <a href="/">samsung </a>|  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |
                        <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung Tablets</a> |  <a href="/">Sony</a> | 
                        <a href="/">Microx</a> |<a href="/">samsung Tablets</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  
                        <a href="/">Sony</a> | <a href="/">Microx Tablets</a> | view all items
                        </div>
                        <div className="row small-box pad-botom ">
                        <strong>Computers :</strong> <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> | 
                        <a href="/">samsung Computers</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |
                        <a href="/">Sony</a> | <a href="/">Microx</a> |<a href="/">samsung</a> |  <a href="/">Sony</a> | 
                        <a href="/">Microx Computers</a> |<a href="/">samsung Computers</a> |  <a href="/">Sony</a> | <a href="/">Microx</a> |
                        <a href="/">samsung</a> |  <a href="/">Sony</a> | <a href="/">Microx Computers</a> |<a href="/">samsung</a> |  
                        <a href="/">Sony</a> | <a href="/">Microx</a> | view all items
                        </div>
                    <div className="row">
                            <div className="col-md-4">
                                <strong>Send a Quick Query </strong>
                                <hr />
                                <form>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" required="required" placeholder="Name" />
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" required="required" placeholder="Email address" />
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" required="required" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit Request</button>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        <div className="col-md-4">
                            <strong>Our Location</strong>
                            <hr />
                            <p>
                            234, New york Street,<br />
                            Just Location, USA<br />
                            Call: +09-456-567-890<br />
                            Email: info@yourdomain.com<br />
                            </p>
                            2014 www.yourdomain.com | All Right Reserved
                        </div>
                        <div className="col-md-4 social-box">
                            <strong>We are Social </strong>
                            <hr />
                            <a href="/"><i className="fa fa-facebook-square fa-3x " /></a>
                            <a href="/"><i className="fa fa-twitter-square fa-3x " /></a>
                            <a href="/"><i className="fa fa-google-plus-square fa-3x c" /></a>
                            <a href="/"><i className="fa fa-linkedin-square fa-3x " /></a>
                            <a href="/"><i className="fa fa-pinterest-square fa-3x " /></a>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. 
                            </p>
                        </div>
                        </div>
                        <hr />
                    </div>
        
        );
    }
}

export default Footer;