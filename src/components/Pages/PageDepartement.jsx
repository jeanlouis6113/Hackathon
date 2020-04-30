import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo';
import { Link } from 'react-router-dom';


export class PageDepartement extends React.Component {

    render() {
        return (
            <Container className="themed-container" fluid={true}>
                <Row >
                    <Col>
                        <Logo />
                    </Col>
                </Row>
                <h1>TrAvel Art</h1>
                <h2 className="title">Welcome dear visitor</h2>
                <p className="align">The purpose of this website is to offer a free initation to art for the beginner and to extend your your knowledge about  other themes if you are already an afficionados.<br />
                We offer you the possibility to see Artwork from our collection randomly selected in themes of your choice.</p>
                    <Row>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreArms"className="">
                                <div className="departement departementArms">
                                    <h3>Arms and Armors</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreAsia">
                                <div className="departement departementAsia">
                                    <h3>Asian Art</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="./PageOeuvrePainting">
                                <div className="departement departementEuro">
                                    <h3>European Paintings</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreInstrument">
                                <div className="departement departementInst">
                                    <h3>Musical Instruments</h3>
                                </div>
                            </Link>
                        </Col>

                        {/* Corriger les nouveaux éléments à parir d'ici */}

                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreGreek"className="">
                                <div className="departement departementGreek">
                                    <h3>Greek and Roman Art</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreEgypt">
                                <div className="departement departementEgyptian">
                                    <h3>Egyptian Art</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="./PageOeuvreIslamic">
                                <div className="departement departementIslamic">
                                    <h3>Islamic Art</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="12" lg="6" xl="3" className="hover-departement">
                            <Link to="/PageOeuvreCloister">
                                <div className="departement departementCloisters">
                                    <h3>The Cloisters</h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default PageDepartement;