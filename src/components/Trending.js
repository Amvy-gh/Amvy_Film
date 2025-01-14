import {Card, Container, Row, Col, Image} from "react-bootstrap"
import trending_1 from "../assets/images/Trending/trending_1.png"


const Trending  = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark text-center movieImage">
                            <Image src={trending_1} alt="trending_1" className="movieImage"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Card title</Card.Title>
                                        <Card.Text className="text-start">
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark text-center movieImage">
                            <Image src={trending_1} alt="trending_1" className="movieImage"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Card title</Card.Title>
                                        <Card.Text className="text-start">
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark text-center movieImage">
                            <Image src={trending_1} alt="trending_1" className="movieImage"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Card title</Card.Title>
                                        <Card.Text className="text-start">
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending;