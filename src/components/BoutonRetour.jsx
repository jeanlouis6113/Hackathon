import React from 'react';
import './BoutonRetour.scss';
import { Link } from 'react-router-dom';

function BoutonRetour() {
    
    return (
    <div className="wrapper-button">
        <Link to="/">
            <p className="btn-homepage" data-text="Back">Back</p>
        </Link>
    </div>
    )
}

export default BoutonRetour;