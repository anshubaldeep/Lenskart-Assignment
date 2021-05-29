import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import ChaseLogo from '../assets/images/chase-logo.png';

const CustomCard = (props) => {
    const desc=props.description.split('/');
    const pName=<span className='pName'>{desc[1]}</span>;
    return (
    <Col xl={4} lg={6} md={12}>
      <Card>
        <Card.Img variant="top" src={props.image.default} />
        <Card.Body>
          <Card.Text>{desc[0]}{pName}{desc[2]}</Card.Text>
          <img src={props.specImage.default} className='Spec-Image' alt="Spec" />
          <img src={ChaseLogo} alt='Chase-Logo' className='Chase-Logo'/>
          <br/>
          <span className='Spec-Name'>{props.specName}</span>
          <br/>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
