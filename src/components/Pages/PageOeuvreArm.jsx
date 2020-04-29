import React from 'react';
import axios from 'axios';
import elementArms from "./elementArms.json";
import Logo from '../Logo';
import BoutonRechargeArm from '../Bouton/BoutonRechargeArm';



function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomiseur = entierAleatoire(0, 9);
const idRandomSelect = elementArms[randomiseur];

class PageOeuvreArm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informations: {
                objectID: '',
                title: '',
                primaryImage: '',
                objectEndDate: '',
                classification: '',
                artistNationality: 'American'
            }
        };
        this.loadObjectID = this.loadObjectID.bind(this);
    }

    componentDidMount() {
        const idTransmis = Object.values(idRandomSelect)[0];
        this.loadObjectID(idTransmis);
    }


    loadObjectID(idTransmis) {
        const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idTransmis}`;
        // Use axios to get data from the url
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ informations: data });
            });
    }

    render() {
        const informations = this.state.informations;
        return (

            <div className="col-lg-12 col-12 lg-row sm-column justify-content-center">
                < div className="lg-row sm-column col-sm-4 justify-content-start">
                    <Logo />
                </div>
                <div className="col-lg-12 col-12 flex-column flex-lg-row d-flex justify-content-between">
                    <div className="col-lg-5 col-sm-12 sm-column align-items-center">
                        <h2>{informations.title}</h2>
                        <img id="artDisplayed" src={informations.primaryImage} alt="" />
                        <div>
                            <BoutonRechargeArm />
                        </div>
                    </div>
                    <div className=" lg-row col-12 sm-column col-lg-4 justify-content-end">
                        <div className="sm-row col-12 speech-bubble">
                            <p id="description">This picture represents a {informations.classification} the {informations.title} which was created in {informations.objectEndDate}.</p>
                        </div>

                        <div className="justify-content-end">
                            <div className="align-self-lg-end">
                                <img className="align-items-lg-end" id="guideImage" src="https://webstockreview.net/images/clipart-girl-tour-guide-13.png" alt="Guide alias Anaël" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default PageOeuvreArm;

