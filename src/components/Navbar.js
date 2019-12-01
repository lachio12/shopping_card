import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/"><strong>DIGI</strong> Shop</a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                        <li><a href="/">Track Order</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Signup</a></li>
                        <li className="dropdown">
                            <a href="/" className="dropdown-toggle" data-toggle="dropdown">24x7 Support <b className="caret" /></a>
                            <ul className="dropdown-menu">
                            <li><a href="/"><strong>Call: </strong>+09-456-567-890</a></li>
                            <li><a href="/"><strong>Mail: </strong>info@yourdomain.com</a></li>
                            <li className="divider" />
                            <li><a href="/"><strong>Address: </strong>
                                <div>
                                    234, New york Street,<br />
                                    Just Location, USA
                                </div>
                                </a></li>
                            </ul>
                        </li>
                        </ul>
                        <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" placeholder="Enter Keyword Here ..." className="form-control" />
                        </div>
                        &nbsp; 
                        <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    {/* /.navbar-collapse */}
                    </div>
                    {/* /.container-fluid */}
                </nav>
        );
    }
}

export default Navbar;