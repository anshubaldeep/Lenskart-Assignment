import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MirzapurLogo from '../assets/images/mirzapur-logo.png';
import PrimeLogo from '../assets/images/prime-logo.png';
import Spec from '../assets/images/spec-1.png';

const Banner=()=>{
        return(
            <Container fluid className='Banner'>
                <Row>
                    <Col lg={{span:6}} xs={12} sm={10}>
                        <Row className='Banner-Row'>
                            <Col md={{span:6}} xs={12}>
                                <img src={MirzapurLogo} className='mirzapur-logo' alt='Mirzapur Logo'/>
                                <Row className='stream-row'>
                                    <Col md={6} xs={12} className='align-self-center stream-now'>
                                        <h2>STREAM <b>NOW</b></h2>
                                    </Col>
                                    <Col md={6} xs={12} className='align-self-center prime-logo-row'>
                                        <img src={PrimeLogo} className='Prime-Logo' alt='Prime Logo'></img>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{span:6}} xs={12} className='Banner-2'>
                                <h3>MIRZAPUR INSPIRED SUNGLASSES</h3>
                                <img src={Spec} className='Banner-Spec' alt='Sunglasses'></img>
                            </Col>
                        </Row>
                        <div className='Banner-Text'>
                        <b><p>Shop the collection today and 20 Lucky winners per day to win<br/>
                        Amazon Fire TV Stick</p>
                        <Button>View Collection</Button>
                        </b>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}

export default Banner;