import { motion } from 'framer-motion';
import { Modal, Row, Col } from 'react-bootstrap';

const MovieList = ({ show, onClose, movieList }) => {
    return (
        <Modal 
            show={show} 
            onHide={onClose}
            size="lg"
            centered
            className="movie-list-modal"
        >
            <Modal.Header className="custom-modal-header">
                <Modal.Title className="w-100 text-center">
                    <h3 className="movie-list-title mb-0">Daftar Film</h3>
                </Modal.Title>
                <button 
                    className="close-button" 
                    onClick={onClose}
                >
                    ×
                </button>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
                <Row>
                    <Col md={6}>
                        <div className="movie-category">
                            <h4 className="category-title">
                                <span className="category-icon">🔥</span>
                                Trending Movies
                            </h4>
                            <div className="movie-list">
                                {movieList
                                    .filter(movie => movie.category === "Trending")
                                    .map((movie, index) => (
                                        <motion.div
                                            key={index}
                                            className="movie-item"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="movie-title">{movie.title}</span>
                                            <span className="movie-year">{movie.year}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="movie-category">
                            <h4 className="category-title">
                                <span className="category-icon">⚡</span>
                                Superhero Movies
                            </h4>
                            <div className="movie-list">
                                {movieList
                                    .filter(movie => movie.category === "Superhero")
                                    .map((movie, index) => (
                                        <motion.div
                                            key={index}
                                            className="movie-item"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="movie-title">{movie.title}</span>
                                            <span className="movie-year">{movie.year}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};
    
export default MovieList;