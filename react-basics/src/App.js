import './App.css';
import Firstclasscompdemo from './classcomponents/Firstclasscompdemo';
import Firstfuncompdemo from './functioncomponents/Firstfuncompdemo';
import Demo from './functioncomponents/Demo'
import EventDemoinfun from './functioncomponents/EventDemoinfun';
import Propsdemoinfun from './functioncomponents/Propsdemoinfun';
import Statedemoinfun from './functioncomponents/Statedemoinfun';
import Additionwithtextbox from './functioncomponents/Additionwithtextbox';
import RegistrationForm from './functioncomponents/RegistrationForm';
function App() {
  return (
    <div className='container'>
      <h1 className='text-danger'>Hello React</h1>
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
        <RegistrationForm/>
      </div>
   
  );
}

export default App;
