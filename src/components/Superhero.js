import {Card, Container, Row, Col, Image} from "react-bootstrap"
import hero_1 from "../assets/images/Superhero/hero_1.png";
import hero_2 from "../assets/images/Superhero/hero_2.png";
import hero_3 from "../assets/images/Superhero/hero_3.png";
import hero_4 from "../assets/images/Superhero/hero_4.png";
import hero_5 from "../assets/images/Superhero/hero_5.png";
import hero_6 from "../assets/images/Superhero/hero_6.png"; 

const Superhero  = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">
                    SUPERHERO MOVIES
                </h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={hero_1} alt="hero_1" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">ANT-MAN</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero taht known for their incredible strength and bravery.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero_2} alt="hero_2" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero 2 is famous for their agility and quick thinking and then separate the world   .
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 5 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero_3} alt="hero_3" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">THE DARK KNIGHT</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero 3 has unmatched intelligence and futuristic gadgets.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 7 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero_4} alt="hero_4" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero 4 is a master strategist and fearless leader.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 10 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero_5} alt="hero_5" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">IRON-MAN</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero 5 possesses extraordinary speed and endurance.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 15 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero_6} alt="hero_6" className="Images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">THOR</Card.Title>
                                        <Card.Text className="text-start">
                                            Hero 6 is a master of stealth and martial arts.
                                        </Card.Text>
                                        <Card.Text className="text-start">Last updated 20 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero;
