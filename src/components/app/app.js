import React, {useState} from 'react';
import './app.css'
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {PeopleDetails, PeoplePage, PlanetsPage, StarshipsPage} from "../page";

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SecretPage from "../page/secret-page";
import LoginPage from "../page/login-page";


const App = () => {

    const [isAuth, setAuth] = useState(false);

    return (
        <ErrorBoundary>
            <SwapiServiceProvider value={new SwapiService()}>
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route exact path="/" render={() => <h2>Welcome to Star DB</h2>}/>

                            <Route exact path="/people" component={PeoplePage}/>
                            <Route path="/people/:id"
                                   render={({match}) => <PeopleDetails id={match.params.id}/>}
                            />

                            <Route path="/planets/:id?" component={PlanetsPage}/>
                            <Route path="/starships/:id?" component={StarshipsPage}/>

                            <Route exact path="/secret" render={() => <SecretPage isAuth={isAuth}/>}/>
                            <Route exact path="/login" render={() => <LoginPage
                                isAuth={isAuth}
                                onLogin={() => setAuth(true)}/>}
                            />
                            <Route render={() => <h2>Page not found</h2>}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </SwapiServiceProvider>
        </ErrorBoundary>
    );

}

export default App;
