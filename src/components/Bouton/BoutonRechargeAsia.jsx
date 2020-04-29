import React from 'react';
import './BoutonRetour.scss';
import { Link } from 'react-router-dom';

function BoutonRechargeAsia() {
    
    return (
    <div className="wrapper-button">
        <Link to="/PageOeuvreAsia">
            <p className="btn-homepage" data-text="Plus d'oeuvre">Plus d'oeuvre</p>
        </Link>
    </div>
    )
}

export default BoutonRechargeAsia;