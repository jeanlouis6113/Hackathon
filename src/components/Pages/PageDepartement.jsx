import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import ButtonSettings from '../Bouton/ButtonSettings'


export class PageDepartement extends React.Component {

    render() {
        return (
            <Container className="themed-container" fluid={true}>
                <Row >
                    <Col>
                        <Logo />
                    </Col>
                    <Col item xs={1}>
                        <ButtonSettings />t t
                    </Col>
                </Row>
                <h1>TrAvel Art</h1>
                <h2 className="title">Welcome dear visitor</h2>
                <p class="align">The purpose of this website is to offer a free initation to art for the beginner and to extend your your knowledge about  other themes if you are already an afficionados.<br />
                We offer you the possibility to see Artwork from our collection randomly selected in themes of your choice.</p>
                    <Row>
                        <Col xs="12" lg="3">
                            <Link to="/PageOeuvreArms">
                                <div className="departement departementArms">
                                    <h3>Departement Arms</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="3">
                            <Link to="/PageOeuvreAsia">
                                <div className="departement departementAsia">
                                    <h3>Departement Asia</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="3">
                            <Link to="./PageOeuvrePainting">
                                <div className="departement departementEuro">
                                    <h3>Departement Euro</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="3">
                            <Link to="/PageOeuvreInstrument">
                                <div className="departement departementInst">
                                    <h3>Departement Instru</h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default PageDepartement;