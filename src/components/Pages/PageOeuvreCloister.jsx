import React from 'react';
import axios from 'axios';
import elementsCloisters from "./elementsCloisters.json";
import Logo from '../Logo';
import BoutonRecharge from '../Bouton/BoutonRecharge';



function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomiseur = entierAleatoire(0, 9);
const idRandomSelect = elementsCloisters[randomiseur];

class PageOeuvreCloister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informations: {
                objectID: '',
                title: '',
                primaryImage: '',
                objectEndDate: '',
                classification: '',
                artistDisplayName: '',
                artistNationality: ''
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
    
    refreshPage(){
        window.location.reload(false);
    }

    render() {
        const informations = this.state.informations;

        let ArtistName = informations.artistDisplayName
        if (ArtistName === "") {
            ArtistName = "an unknown artist"
        }
        
        let dateModel = informations.objectEndDate;
        if (dateModel === '') {
                dateModel = "unknown date"
            };

        let classItem = informations.classification;
        if (classItem === '') {
            classItem = "a piece of Art"
        };
        
        return (

            <div className="col-lg-12 col-12 lg-row sm-column justify-content-center">
                < div className="lg-row sm-column col-sm-4 justify-content-start">
                    <Logo />
                </div>
                <div className="col-lg-12 col-12 flex-column flex-lg-row d-flex justify-content-between">
                    <div className="col-lg-5 col-sm-12 sm-column align-items-center">
                        <h2>{informations.title}</h2>
                        <img id="artDisplayed" src={informations.primaryImage} alt="" />
                        <div onClick={this.refreshPage}>
                            <BoutonRecharge />
                        </div>
                    </div>
                    <div className=" lg-row col-12 sm-column col-lg-4 justify-content-end">
                        <div className="sm-row col-12 speech-bubble">
                            <p id="description">This picture represents the {classItem} named {informations.title} which was created in {dateModel}.This is an Artwork from the Arms and armors departements and was realized by {ArtistName}.</p>
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

export default PageOeuvreCloister;

