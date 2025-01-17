import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MovieList from './MovieList';
import '../style/intro.css';

const Intro = () => {
    const [showMovieList, setShowMovieList] = useState(false);

    const movieList = [
        { title: "INCEPTION", category: "Trending", year: "2010" },
        { title: "INTERSTELLAR", category: "Trending", year: "2014" },
        { title: "THE MATRIX", category: "Trending", year: "1999" },
        { title: "BLADE RUNNER 2049", category: "Trending", year: "2017" },
        { title: "DUNE", category: "Trending", year: "2021" },
        { title: "ARRIVAL", category: "Trending", year: "2016" },
        { title: "ANT-MAN", category: "Superhero", year: "2015" },
        { title: "SPIDER-MAN", category: "Superhero", year: "2021" },
        { title: "THE DARK KNIGHT", category: "Superhero", year: "2008" },
        { title: "CAPTAIN AMERICA", category: "Superhero", year: "2011" },
        { title: "IRON-MAN", category: "Superhero", year: "2008" },
        { title: "THOR", category: "Superhero", year: "2011" }
    ];

    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="hero-title">NONTON GRATIS</h1>
                            <h1 className="hero-title">GAK PAKE KARCIS</h1>
                            <div className="intro-button mt-4">
                                <Button 
                                    variant="danger" 
                                    size="lg"
                                    className="watch-button custom-btn"
                                    onClick={() => setShowMovieList(true)}
                                >
                                    Lihat Semua List
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <MovieList 
                show={showMovieList} 
                onClose={() => setShowMovieList(false)} 
                movieList={movieList} 
            />
        </div>
    );
};

export default Intro;