import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Propsdemoinfun from './functioncomponents/Propsdemoinfun'
import Statedemoinfun from './functioncomponents/Statedemoinfun'
import RegistrationForm from './functioncomponents/RegistrationForm'
import FormValidations from './functioncomponents/FormValidations'
import ListRendering from './functioncomponents/ListRendering'
import Products from './functioncomponents/Products'
import Pagenotfound from './Pagenotfound'
import Home from './functioncomponents/Home'
import LiftingstateupParent from './functioncomponents/LiftingstateupParent'
import ReactHookForm from './functioncomponents/ReactHookForm'
import HooksEffectCallbaclRefdemo from './functioncomponents/HooksEffectCallbaclRefdemo'
import Usememodemo from './functioncomponents/Usememodemo'
import RefDemoinfun from './functioncomponents/RefDemoinfun'
import Firstclasscompdemo from './classcomponents/Firstclasscompdemo'
import PropsandEvent from './classcomponents/PropsandEvent'
import Stateclassdemo from './classcomponents/Stateclassdemo'
import Forminclass from './classcomponents/Forminclass'
import LifeCycleMethods from './classcomponents/LifeCycleMethods'
import PureCompDemo from './classcomponents/PureCompDemo'
import Errorboundarydemo from './classcomponents/errorboundarydemo'
import ErrorBoundary from './classcomponents/ErrorBoundary'
import MainComp from './classcomponents/MainComp'

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<App/>}>
              <Route path='' element={<ErrorBoundary fallback="not active"><Home/></ErrorBoundary>}/>
              <Route path='props' element={<Propsdemoinfun/>}/>
              <Route path='state' element={<Statedemoinfun/>}/>
              <Route path='form' element={<RegistrationForm/>}/>
              <Route path='form/valid' element={<FormValidations/>}/>
              <Route path='list/basic' element={<ListRendering/>}></Route>
              <Route path='products' element={<Products/>}/>
              <Route path='lifting' element={<LiftingstateupParent/>}/>
              <Route path='reacthookform' element={<ReactHookForm/>}/>
              <Route path='hooks' element={<HooksEffectCallbaclRefdemo/>}/>
              <Route path='usememo' element={<Usememodemo/>}/>
              <Route path='ref' element={<RefDemoinfun/>}/>

              <Route path='classdemo' element={<Firstclasscompdemo/>}/>
              <Route path='peclass' element={<PropsandEvent username={111} isActive={true}
              hobbies={["badminton","circket","travelling","dance"]}>
                <h1>children1</h1>
                <Firstclasscompdemo/>
              </PropsandEvent>}/>
              <Route path='stateclass' element={<Stateclassdemo contact="Pune"/>}/>
              <Route path='stateform' element={<Forminclass/>}/>
              <Route path='statelifecycle' element={<LifeCycleMethods contact="Pune"/>}/>
              <Route path='pure' element={<PureCompDemo/>}/>
              <Route path='hoc' element={<MainComp/>}/>
               </Route>

          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
    </>
  )
}

export default Routing
