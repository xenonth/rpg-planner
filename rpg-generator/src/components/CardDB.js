import React from 'react';

import Card from 'react-bootstrap/Card';
//import files from Card
import InhabitantItem from './inhabitantItem';

function CardDB (props) {
    const name = props.name;
    const government = props.government;
    const type = props.type;
    const size = props.size;
    const description = props.description
    const happening = props.whatsUp;
    
    return (
        <Card className = "text-center">
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Government: {government}
                </Card.Text>
                <Card.Text>
                    Settlement Size: {type}
                </Card.Text>
                <Card.Text>
                    Population: {size}
                </Card.Text>
                <Card.Text>
                    Inhabitants: <InhabitantItem races={props.races} />
                </Card.Text>
                <Card.Text>
                    Description:{description}
                </Card.Text>
                <Card.Text>
                    Event: {happening}
                </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardDB;