import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/indexPage';
import AboutPage from '../pages/aboutPage';
import GalleryPage from '../pages/galleryPage';
import EventsPage from '../pages/eventsPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/eventsPage" component={EventsPage}></Route>
            <Route exact path="/galleryPage" component={GalleryPage}></Route>
            <Route exact path="/aboutPage" component={AboutPage}></Route>
        </Switch>
    );
}

export default Routes;
