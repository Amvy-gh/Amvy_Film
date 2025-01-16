import { Card, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MovieCard = ({ image, title, description, lastUpdated }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="movie-card">
                <div className="image-container">
                    <Image src={image} alt={title} className="movie-image" />
                    <div className="overlay">
                        <button className="play-button">▶</button>
                    </div>
                </div>
                <div className="card-content">
                    <Card.Title className="movie-title">{title}</Card.Title>
                    <Card.Text className="movie-description">{description}</Card.Text>
                    <Card.Text className="last-updated">{lastUpdated}</Card.Text>
                </div>
            </Card>
        </motion.div>
    );
};

export default MovieCard;