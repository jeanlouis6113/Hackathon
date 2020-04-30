//Logo de l'application
import React from 'react';
import { Link } from 'react-router-dom';


export class Logo extends React.Component {

    render() {
        return (
            <div className="logo-wrapper">
                 <Link to="/"><img className="logo" src='/images/logoTravelArt.png' alt="Logo Travel Art"/></Link>
            </div>
        )
    }
}

export default Logo;