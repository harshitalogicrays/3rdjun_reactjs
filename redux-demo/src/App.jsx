import AddUser from "./components/AddUser"
import ViewUser from "./components/ViewUser"

function App() {
  return (
   <>
  
   <div className="container mt-5">
   <h1>Redux Demo</h1><hr/>
    <div className="row">
      <div className="col">
        <AddUser/>
      </div>
      <div className="col">
        <ViewUser/>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
