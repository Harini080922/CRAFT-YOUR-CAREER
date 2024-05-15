import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/style.css';
import Blob from './Blob';

export default class HomeDisplay extends Component {
    render() {
        var containLink = "/details";
        return (
            <>
                <div className="my-4">
                    <div className="homeScreen d-flex justify-content-center align-items-center">
                        <div className="adjust">
                            <div className="wrap text-center my-5 py-4"> {/* Added my-5 */}
                                <h1 className="mt-4">Craft Your Career</h1>
                                <div className="content">
                                    <p className="lead px-3">
                                        <i className="fa fa-quote-left"></i> Now create your Resume and CV Instantly 
                                        with the help of this App made with JavaScript 
                                        Library - React <i className="fa fa-quote-right"></i> 
                                    </p>
                                    <Link to={"/resume"+containLink} className="btn btn-primary btn-lg">Start</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
