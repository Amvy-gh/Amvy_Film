import { Container, Row, Col } from "react-bootstrap";
import MovieCard from './MovieCard';
import trending_1 from "../assets/images/Trending/trending_1.png";
import trending_2 from "../assets/images/Trending/trending_2.png";
import trending_3 from "../assets/images/Trending/trending_3.png";
import trending_4 from "../assets/images/Trending/trending_4.png";
import trending_5 from "../assets/images/Trending/trending_5.png";
import trending_6 from "../assets/images/Trending/trending_6.png";

const trendingData = [
    {
        image: trending_1,
        title: "GUARDIANS OF THE GALAXY VOL. 2",
        description: "The Guardians must work together as a family while uncovering the mystery of Peter Quill's parentage and facing new challenges ahead.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2017"
    },
    {
        image: trending_2,
        title: "AVENGERS: ENDGAME",
        description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2019"
    },
    {
        image: trending_3,
        title: "AVENGERS: INFINITY WAR",
        description: "The Avengers must unite to stop Thanos, an intergalactic warlord, from acquiring all six Infinity Stones, risking the universe's existence.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2018"
    },
    {
        image: trending_4,
        title: "AVENGERS: AGE OF ULTRON",
        description: "The Avengers face Ultron, an artificial intelligence bent on humanity's destruction, and must stop him before it's too late.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2015"
    },
    {
        image: trending_5,
        title: "GUARDIANS OF THE GALAXY",
        description: "A group of intergalactic criminals band together to stop a fanatical warrior from taking control of the universe and causing destruction.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2014"
    },
    {
        image: trending_6,
        title: "VENOM: THE LAST DANCE",
        description: "Eddie Brock struggles to coexist with Venom, facing a dangerous new threat that forces them to work together for survival.",
        lastUpdated: "Last updated 3 mins ago",
        year: "2021"
    }
];

const Trending = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-white text-center mb-4">TRENDING MOVIES</h1>
                <Row className="g-4">
                    {trendingData.map((movie, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <MovieCard {...movie} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Trending;
