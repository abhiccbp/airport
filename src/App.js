import './App.css'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import AirportDetails from './Components/AirportDetails'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/airportDetails/" component={AirportDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
