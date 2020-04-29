import React from 'react';
import axios from 'axios';
import elementArms from "../elementArms.json";


function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   const randomiseur = entierAleatoire(0,9);
   const idRandomSelect = elementArms[randomiseur];
   
   class PageOeuvreArm extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               informations: {
                   objectID: '',
                   title: '',
                   primaryImage: ''
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
            <div>
                <h1>{informations.title}</h1>
                <img src={informations.primaryImage} alt="" />
            </div>
        );
    }

}

export default PageOeuvreArm;

