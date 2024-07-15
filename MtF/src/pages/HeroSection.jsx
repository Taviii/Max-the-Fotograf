import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
    return (
        <Container className="hero-section-container">
            <Row className="h-100">
                <Col xs md="8" className="d-flex flex-column justify-content-center text-start px-4">
                    <div className="mx-4">
                        <h1>Max the Fotograf</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui sapien, commodo a malesuada ac, laoreet ac lorem. Nunc vitae dolor dapibus, sagittis enim ac, gravida purus. Ut eget accumsan quam. Sed scelerisque sed odio sed mattis. In elementum metus sit amet leo dictum, eget accumsan quam tempor. Donec malesuada, dolor vitae eleifend maximus, sapien orci sodales est.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection