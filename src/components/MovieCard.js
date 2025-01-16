import { Card, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MovieCard = ({ image, title, description, lastUpdated }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="movie-card h-100">
                <div className="image-container position-relative">
                    <Image src={image} alt={title} className="movie-image w-100" />
                    <div className="overlay position-absolute w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center">
                        <button className="play-button">▶</button>
                    </div>
                </div>
                <div className="card-content bg-dark text-white p-3">
                    <Card.Title className="text-center fw-bold">{title}</Card.Title>
                    <Card.Text className="text-start">{description}</Card.Text>
                    <Card.Text className="text-start text-muted small">{lastUpdated}</Card.Text>
                </div>
            </Card>
        </motion.div>
    );
};

export default MovieCard;