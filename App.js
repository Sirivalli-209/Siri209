import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import HeaderComponent from './footer-header-component/HeaderComponent';
import FooterComponent from './footer-header-component/FooterComponent';
import ListEmployeeComponent from './mycomponent/ListEmployeeComponent';
import CreateEmployeeComponent from './mycomponent/CreateEmployeeComponent';
import ViewEmployeeComponent from './mycomponent/ViewEmployeeComponent';
function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent></HeaderComponent>
          <hr/>
           <ul>
             <li>
                 <Link to="/">ListEmployeeComponent</Link>
             </li>
             <li>
                 <Link to="/CComponent">CreateEmployeeComponent</Link>
             </li>
             <li>
                 <Link to="/MyView">ViewEmployeeComponent:RAM</Link>
             </li>
           </ul>
           <hr/>
           <Switch>
                 <Route exact path="/">
                     <ListEmployeeComponent></ListEmployeeComponent>
                 </Route>
                 <Route exact path="/CComponent">
                     <CreateEmployeeComponent></CreateEmployeeComponent>
                 </Route>
                 <Route exact path="/MyView">
                     <ViewEmployeeComponent></ViewEmployeeComponent>
                 </Route>



           </Switch>
           <hr/>
           <FooterComponent></FooterComponent>
      
      
      
      
      </Router>
    </div>
  );
}

export default App;
