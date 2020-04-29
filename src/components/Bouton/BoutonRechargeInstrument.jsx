import React from 'react';
import './BoutonRetour.scss';
import { Link } from 'react-router-dom';

function BoutonRechargeInstrument() {
    
    return (
    <div className="wrapper-button">
        <Link to="/PageOeuvreArm">
            <p className="btn-homepage" data-text="Plus d'oeuvre">Plus d'oeuvre</p>
        </Link>
    </div>
    )
}

export default BoutonRechargeInstrument;