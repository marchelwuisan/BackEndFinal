import React, {useState, useEffect} from 'react';
import * as b from 'react-bootstrap';
import HomePage from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/molecules/NavBar/index.js'
import UserDetail from './pages/UserDetail/index.js'
import AboutPage from './pages/About/';
import Submit from './pages/Submit';
import firebase from 'firebase';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
  firebase
    .database()
    .ref("jobs")
    .on("value", (res) => {
      if (res.val()) {
        const rawData = res.val();
        const jobsArr = [];
        Object.keys(rawData).map((item) => {
          return jobsArr.push({
            id: item,
            ...rawData[item],
          });
        });
        setJobs(jobsArr);
        setIsLoading(false);
      }
    });
}, []);

  if(isLoading) {
    return (
    <b.Container fluid>
      <div>
      </div>
      </b.Container>
    )
  } else {
    return (
      <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage jobs={jobs}/>
            </Route>
            <Route exact path="/userDetail/:id" children={
              <UserDetail jobs={jobs}/>
            }/>
            <Route exact path="/submit">
              <Submit jobs={jobs}/>
            </Route>
            <Route exact path="/about">
              <AboutPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
