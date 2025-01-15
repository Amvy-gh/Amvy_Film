import {Card, Container, Row, Col, Image} from "react-bootstrap"
import trending_1 from "../assets/images/Trending/trending_1.png";
import trending_2 from "../assets/images/Trending/trending_2.png";
import trending_3 from "../assets/images/Trending/trending_3.png";
import trending_4 from "../assets/images/Trending/trending_4.png";
import trending_5 from "../assets/images/Trending/trending_5.png";
import trending_6 from "../assets/images/Trending/trending_6.png";



const Trending  = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">
                    TRENDING MOVIES
                </h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={trending_1} alt="trending_1" className="Images"/>
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
                        <Card className="movieImage">
                            <Image src={trending_2} alt="trending_2" className="Images"/>
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
                        <Card className="movieImage">
                            <Image src={trending_3} alt="trending_3" className="Images"/>
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
                        <Card className="movieImage">
                            <Image src={trending_4} alt="trending_4" className="Images"/>
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
                        <Card className="movieImage">
                            <Image src={trending_5} alt="trending_5" className="Images"/>
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
                        <Card className="movieImage">
                            <Image src={trending_6} alt="trending_6" className="Images"/>
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