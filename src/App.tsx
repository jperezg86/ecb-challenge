import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import LoaderComponent from './components/Loader'; 
import {useSelector} from 'react-redux';


function App() {
  const loading = useSelector((state:any) => state.loadingMessage);
  return (
        <div className="App">
           {(loading) ? (
              <LoaderComponent/>
          ) : null}
          <header className="container-fluid p-3 flex-column justify-content-center d-flex align-items-center">
              <h1>ECB Code Challenge</h1>
          </header>
          <div className="container-fluid">
              <Router>
                <Switch>
                  <Route path="/" >
                    <Home/>
                  </Route>
                </Switch>
              </Router>
          </div>
         
        </div>  
    
  );
}

export default App;
