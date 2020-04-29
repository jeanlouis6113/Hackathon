import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import { Link } from 'react-router-dom';


export class PageDepartement extends React.Component {

    render() {
        return (
            <Container className="themed-container" fluid={true}>
                <Logo />
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