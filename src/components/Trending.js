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
            title: "INCEPTION",
            description: "A skilled thief enters people's dreams to steal their deepest secrets.",
            lastUpdated: "Last updated 3 mins ago"
        },
        {
            image: trending_2,
            title: "INTERSTELLAR",
            description: "Astronauts travel through a wormhole in search of a new home for humanity.",
            lastUpdated: "Last updated 3 mins ago"
        },
        {
            image: trending_3,
            title: "THE MATRIX",
            description: "A computer programmer discovers the truth about his artificial world.",
            lastUpdated: "Last updated 3 mins ago"
        },
        {
            image: trending_4,
            title: "BLADE RUNNER 2049",
            description: "A blade runner uncovers a secret that threatens humanity's future.",
            lastUpdated: "Last updated 3 mins ago"
        },
        {
            image: trending_5,
            title: "DUNE",
            description: "A noble family becomes embroiled in a war for control of a desert planet.",
            lastUpdated: "Last updated 3 mins ago"
        },
        {
            image: trending_6,
            title: "ARRIVAL",
            description: "A linguist works with the military to communicate with alien lifeforms.",
            lastUpdated: "Last updated 3 mins ago"
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