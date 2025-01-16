import { Container, Row, Col } from "react-bootstrap";
import MovieCard from './MovieCard';
import hero_1 from "../assets/images/Superhero/hero_1.png";
import hero_2 from "../assets/images/Superhero/hero_2.png";
import hero_3 from "../assets/images/Superhero/hero_3.png";
import hero_4 from "../assets/images/Superhero/hero_4.png";
import hero_5 from "../assets/images/Superhero/hero_5.png";
import hero_6 from "../assets/images/Superhero/hero_6.png";

const superheroData = [
    {
        image: hero_1,
        title: "ANT-MAN",
        description: "Hero that known for their incredible strength and bravery.",
        lastUpdated: "Last updated 3 mins ago"
    },
    {
        image: hero_2,
        title: "SPIDER-MAN",
        description: "Hero famous for their agility and quick thinking in the most challenging situations.",
        lastUpdated: "Last updated 5 mins ago"
    },
    {
        image: hero_3,
        title: "THE DARK KNIGHT",
        description: "Hero has unmatched intelligence and futuristic gadgets.",
        lastUpdated: "Last updated 7 mins ago"
    },
    {
        image: hero_4,
        title: "CAPTAIN AMERICA",
        description: "Hero is a master strategist and fearless leader.",
        lastUpdated: "Last updated 10 mins ago"
    },
    {
        image: hero_5,
        title: "IRON-MAN",
        description: "Hero possesses extraordinary speed and endurance.",
        lastUpdated: "Last updated 15 mins ago"
    },
    {
        image: hero_6,
        title: "THOR",
        description: "Hero is a master of stealth and martial arts.",
        lastUpdated: "Last updated 20 mins ago"
    }
];

const Superhero = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-white text-center mb-4">SUPERHERO MOVIES</h1>
                <Row className="g-4">
                    {superheroData.map((hero, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <MovieCard {...hero} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Superhero;