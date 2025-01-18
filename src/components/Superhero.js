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
        description: "A hero with the ability to shrink in scale but increase in strength, using advanced technology.",
        lastUpdated: "Last updated 3 mins ago"
    },
    {
        image: hero_2,
        title: "SPIDER-MAN",
        description: "A young hero with spider-like abilities, known for swinging through cities and quick wit.",
        lastUpdated: "Last updated 5 mins ago"
    },
    {
        image: hero_3,
        title: "THE DARK KNIGHT",
        description: "A vigilante who uses his intellect, wealth, and cutting-edge gadgets to fight crime in Gotham.",
        lastUpdated: "Last updated 7 mins ago"
    },
    {
        image: hero_4,
        title: "CAPTAIN AMERICA",
        description: "A super-soldier with a strong sense of justice and an iconic vibranium shield.",
        lastUpdated: "Last updated 10 mins ago"
    },
    {
        image: hero_5,
        title: "IRON-MAN",
        description: "A genius inventor and billionaire who fights crime in a high-tech armored suit.",
        lastUpdated: "Last updated 15 mins ago"
    },
    {
        image: hero_6,
        title: "THOR",
        description: "The god of thunder wielding the enchanted hammer Mjölnir, protecting realms from cosmic threats.",
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
