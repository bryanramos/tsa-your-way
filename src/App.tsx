import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { Constants } from './Constants';
import { HighSchool, MiddleSchool, Event, NotFound } from './pages/';
import { Bounds } from './components/Common';
import Header from './components/Header';
import Footer from './components/Footer';
import { SiteAlert } from './components/SiteAlert';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const SiteContent = styled.div`
    margin: 40px 0;
    flex: 1 0 auto;
`;

export default function App() {
    return (
        <Router>
            <Main id="tsa-your-way">
                <SiteAlert />
                <Header />
                <SiteContent>
                    <Bounds>
                        <Switch>
                            <Route exact={true} path={Constants.RootPage} component={HighSchool} />
                            <Redirect path={Constants.HighSchool} to={Constants.RootPage} />
                            <Route exact={true} path={Constants.MiddleSchool} component={MiddleSchool} />
                            <Route exact={true} path={Constants.Event} component={Event} />
                            <Route component={NotFound} />
                        </Switch>
                    </Bounds>
                </SiteContent>
                <Footer />
            </Main>
        </Router>
    );
}
