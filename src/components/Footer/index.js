import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from './../../assets/img/google-play-badge.png'

const Footer = () => {
    return (
        <Container fluid>
        <FooterArea>
            <hr className="line-footer" />
             <Row>
                <Col className="text-left ml-5">Termo de Uso <br />
                    Política de Privacidade
                </Col>
                <Col className="text-center">               
                <img src={Logo} className="logo-play" alt="Logo play" />      
                </Col>
                <Col>
                    <Link to="/" className="mr-2"><FaInstagram size={20} /></Link>
                    <Link to="/" className="mr-2"><FaFacebook size={20} /></Link>
                    <Link to="/"><FaYoutube size={20} /></Link>
                    <div className="mt-2">contato@netlibras.com.br</div>
                </Col>
            </Row>
        </FooterArea>
        <footer className="d-flex justify-content-center text-white mt-3">
Todos os direitos reservados | Desenvolvido por Milani Designer
</footer>
        </Container>
    );
}

export default Footer;