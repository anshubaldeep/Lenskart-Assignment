import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomCard from './Card';

//../assets/images/profile

const info=[
    {
        key:1,
        info:"The iron-fisted /Akhandanand Tripathi/ is a millionaire carpet exporter and the mafia don of Mirzapur",
        spec:"Golden Green Full Rim",
        image:require('../assets/images/profile-1.jpg'),
        specImage:require('../assets/images/pspec-1.png')
    },
    {
      key:2,
      info:"Akhandanand's son, /Munna Tripathi/ is power hungry and will not stop at anything to inherit his father's legacy",
      spec:"Black Grey Full Rim",
      image:require('../assets/images/profile-2.jpg'),
      specImage:require('../assets/images/pspec-2.png')
    },
    {
        key:3,
        info:"An honest cop, /Maurya Saab/ who goes an extra mile to eliminate the bad and the over-powering crime in the city",
        spec:"Golden Brown Full Rim",
        image:require('../assets/images/profile-3.jpg'),
        specImage:require('../assets/images/pspec-3.png')
    }
]



const Description=()=>{
    
        return(
            <Container fluid className='Description'>
            <h1>Bold, Daring & Sturdy</h1>
            <h3>These pilots are perfect for the Grunge look</h3>
            <hr/>
            <div>
            <Row className='Card-Row'>
                {info.map(id=><CustomCard
                    key={id.key}
                    description={id.info}
                    image={id.image}
                    specImage={id.specImage}
                    specName={id.spec}
                />)}
            </Row>
            </div>
            </Container>
        );
}

export default Description;