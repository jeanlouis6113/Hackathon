import React from 'react';
import ButtonSettings from "./Bouton/ButtonSettings";
import {  Row, Col  } from 'reactstrap';



export class Footer extends React.Component {

    render() {
        return (
            <Row className="foote">
                <Col>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/metmuseum"  ><img className="icone" src='https://www.tableedeschefs.fr/wp-content/uploads/2015/08/fb-icon-300x300.png' alt="Metmuseum" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/metmuseum"  ><img className="icone" src='https://www.stickpng.com/assets/images/5a2fe479cc45e43754640849.png' alt="Metmuseum" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/metmuseum"  ><img className="icone" src='https://folieurbaine.com/wp-content/uploads/2019/06/LOGOS-YOUTUBE-NOIR.png' alt="Metmuseum" /></a>
                </Col>
                <Col >
                    <ButtonSettings className="copie" />
                    <img className="copie" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqq-Mz5CCMT8K2RF2B2KKBfhFY53VPJpw0gNKnc6O0w10amvBh&usqp=CAU' alt="Copyright" />
                </Col>
            </Row>
        )
    }
}

export default Footer;