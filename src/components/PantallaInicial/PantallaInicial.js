import './PantallaInicial.css'
import {Button, Container, Row, Col, Stack} from "react-bootstrap";
import Logo from '../../images/Logo.png';

function PantallaInicial() {
  return (
    <div className='PantallaInicial'>
      <Container>
        <Row>
          <Col>
            <h1 className='titulo'>
              Bienvenido a <br/>
              Beyamaps
              </h1>
          </Col>
        </Row>

        <Row>
          <Col>
              <img src={Logo} alt="Logo" className="m-3"/>
          </Col>
        </Row>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant='dark' className='boton'>Iniciar Sesión</Button>
          <Button variant='dark' className='boton'>Crear Cuenta</Button>
        </Stack>
        
      </Container>
    </div>
  );
}

export default PantallaInicial;