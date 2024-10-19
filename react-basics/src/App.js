import './App.css';
import Firstclasscompdemo from './classcomponents/Firstclasscompdemo';
import Firstfuncompdemo from './functioncomponents/Firstfuncompdemo';
import Demo from './functioncomponents/Demo'
import EventDemoinfun from './functioncomponents/EventDemoinfun';
import Propsdemoinfun from './functioncomponents/Propsdemoinfun';
import Statedemoinfun from './functioncomponents/Statedemoinfun';
import Additionwithtextbox from './functioncomponents/Additionwithtextbox';
import RegistrationForm from './functioncomponents/RegistrationForm';
import CSSDemo from './functioncomponents/CSSDemo';
import cssmodule from './app.module.css'
import FormValidations from './functioncomponents/FormValidations';
import ListRendering from './functioncomponents/ListRendering';
import Products from './functioncomponents/Products';
import FormValidationwitherrorobj from './functioncomponents/FormValidationwitherrorobj';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
   <>
      {/* <h1 className='text-danger App'>Hello React</h1>
      <h1 className={cssmodule.error}>Hello React</h1> */}
      {/* <Firstfuncompdemo></Firstfuncompdemo>  
      <hr/>
      <Firstclasscompdemo/>
      <Demo/> */}

      {/* <EventDemoinfun/><hr/>
      <Propsdemoinfun username="ram" address="pune" mobile={908978} isActive={true}>
          <p>children of propsdemo component</p>
          <h1>heading</h1>
          <Demo></Demo>
      </Propsdemoinfun> */}

      {/* <Statedemoinfun/> */}

      {/* <Additionwithtextbox/> */}
        {/* <RegistrationForm/> */}
        {/* <CSSDemo size={30}/> */}
        {/* <FormValidations/> */}
        {/* <ListRendering/> */}
        {/* <Products/> */}

        {/* <FormValidationwitherrorobj/> */}

        <Navbar/>
        <Row>
          <Col xs={2}><Sidebar/></Col>
          <Col>
          <Container className='mt-5'>
            <Outlet/>
           </Container>
          </Col>
       </Row>
        </>
  );
}

export default App;
