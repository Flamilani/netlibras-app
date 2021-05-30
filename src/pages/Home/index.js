import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Logo from './../../assets/img/logo_home.png'

const Home = () => {
    return (
<div>             
    <Container className="mt-5">
    <Row>
        <Col sm={8}>
        <iframe src="https://player.vimeo.com/video/331287987" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </Col>
        <Col sm={4}>
        <Jumbotron className="text-center text-white bg-dark fundo-home">
    <img src={Logo} className="logo-home mb-3" alt="Logo Home" />
    <p>
    Aqui tem filmes de Surdos <br /> em Libras para assistir!
    </p>
    <p className="mt-4">
    <Link className="btn btn-danger" to="/cadastro">Cadastra-se</Link>
    </p>
    </Jumbotron>
        </Col>
    </Row>
    </Container>
</div>

      
    );
}

export default Home;