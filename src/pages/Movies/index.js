import React from 'react';
import { Container } from 'reactstrap';
import Carousel from '../../components/Carousel';
import dadosIniciais from './../../data/dados_iniciais.json';

const Movies = () => {
    return (
        <Container fluid={true} className="mt-4">
               <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel                
                category={dadosIniciais.categorias[1]}
            />

            <Carousel                
                category={dadosIniciais.categorias[2]}
            />  

            <Carousel                
                category={dadosIniciais.categorias[3]}
            />  
        </Container>      
    );
}

export default Movies;