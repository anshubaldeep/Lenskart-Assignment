import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


const InfoCard=()=>{
        return(
            <Container fluid className='Info-Card'>
            <Row>
                <Col md={7} xs={12}>
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

export default InfoCard;