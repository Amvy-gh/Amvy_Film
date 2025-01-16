import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Intro = () => {
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
                                    className="watch-button"
                                >
                                    Lihat Semua List
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Intro;