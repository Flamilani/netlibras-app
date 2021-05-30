import React, { useState } from 'react';
import './styles.css';
import { Container, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

const Register = () => {

const [nome, setNome] = useState('');
const [celular, setCelular] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberPassword, setRememberPassword] = useState(false);
const [disabled, setDisabled] = useState(false); 
const [error, setError] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

}
    return (
      <div className="container-register">
       <Container className="mt-5">   
           <Card className="login-form bg-secondary text-white">
        <CardHeader className="text-center bg-dark text-white">Cadastre-se</CardHeader>
        <CardBody>        
          <Form onSubmit={handleSubmit}>
            <FormGroup>
        <Label className="sr-only" for="nome">Nome</Label>
        <Input type="text" 
        placeholder="Nome" 
        value={nome}
        onChange={e=>setNome(e.target.value)} 
        required />
      </FormGroup>
      <FormGroup>
        <Label className="sr-only" for="nome">Celular</Label>
        <Input type="tel" 
        placeholder="Celular" 
        value={celular}
        onChange={e=>setCelular(e.target.value)} 
        required />
      </FormGroup>
      <FormGroup>
        <Label className="sr-only" for="email">Email</Label>
        <Input type="email" 
        placeholder="E-mail" 
        value={email}
        onChange={e=>setEmail(e.target.value)} 
        required />
      </FormGroup>
      <FormGroup>
        <Label className="sr-only" for="senha">Senha</Label>
        <Input type="password" 
        placeholder="Senha"
        value={password} 
        onChange={e=>setPassword(e.target.value)} 
        required />
      </FormGroup>
      <Button disabled={disabled} className="btn btn-danger btn-block">Cadastrar</Button>
          </Form>         
        </CardBody>     
      </Card> 
      <hr className="line-footer" />
      <Button color="primary" size="lg" block><FaFacebook size={20} /> Continuar com Facebook</Button>
  <Button className="btn btn-danger btn-block" size="lg"><FaGooglePlus size={20} /> Continuar com Google</Button>      
{error && 
        <Alert variant="danger" className="alert alert-danger alert-form">
          {error}
        </Alert>
}        
   </Container>
   </div>
    );
}

export default Register;