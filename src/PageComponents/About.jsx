import React, { Component } from 'react'
import Blob from '../DesignComponent/Blob'
import Logo from './cyc_logo.jpg';
import './css/PageComponents.css'

export default class About extends Component {
    render() {
        return (
            <div className="my-5">
                <div className="container">
                <div className="jumbotron text-center">
                    <div className="rotate">
                    <img src={Logo} alt="Logo" className="logo-image2" />
                    </div>
                    <h1 className="display-4">Hey, there!</h1>
                    <p className="lead">
                        This is a Single Page Application made using ReactJS to generate Resume 
                    </p>
                    <hr className="my-4" />
                    <p>
                        Some of the cool features that is provided in this application is that 
                        your Data is unaffected even after Page Refresh as it is stored in your Local Storage System. The 
                        Routing feature provided by React helps to dynamically load the specific content without reloading the whole 
                        documents. The JSX Attributes helps to divided the content into smaller and reusable unit. You can also change
                        the theme and text colour of the Preview section of the Resume-Generator in real time. At present only one theme
                        design is provided but more custom theme can be implemented and added.
                    </p>
                </div>
                </div>
               
            </div>
        )
    }
}
