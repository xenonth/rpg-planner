import RandomTown from '../components/randomTown';

//bootstrap layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GeneratorPage() {

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">

                    <Col xs lg="2"></Col>

                    <Col md="auto">
                        <RandomTown />
                    </Col>

                    <Col xs lg="2"></Col>
                </Row>

            </Container>
        </div>
    )
}

export default GeneratorPage;