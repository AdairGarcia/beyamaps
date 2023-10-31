import './IniciarSesion.css'
import {Button, Container, Row, Col, Stack, Form} from "react-bootstrap";
import Logo from '../../images/Logo.png';

function IniciarSesion() {
  return (
    <div className='IniciarSesion'>
      <Container>
        <Row>
          <Col>
            <h1 className='titulo'>
              Iniciar Sesión
              </h1>
          </Col>
        </Row>

        <Row>
          <Col>
              <img src={Logo} alt="Logo" className="m-3"/>
          </Col>
        </Row>

        <Form>
            <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Correo Electronico" className='entrada'/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="password" placeholder="Contraseña" className='entrada'/>
            </Form.Group>

            <Stack gap={1} className="col-md-5 mx-auto">
                <Button variant='dark' className='boton'>Iniciar Sesión</Button>
            </Stack>
        </Form>

   
        

        <a href='https://www.geeksforgeeks.org/'>¿Olvidaste tu contraseña?</a>
        
      </Container>
    </div>
  );
}

export default IniciarSesion;