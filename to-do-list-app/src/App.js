import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ToDoListComponent from './components/ToDoListComponent'
import update from './components/update'
function App() {
  return (
    <div>

<Router>

<div className="container">
  <Switch>

    <Route exact path="/" component={ToDoListComponent} />
    <Route exact path="/add-list/:id" component={update} />
   

  </Switch>
</div>

</Router>
    </div>
      

  );
}

export default App;
