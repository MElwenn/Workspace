import React, { Component } from 'react';
import { Route } from 'react-router';

import Editor from "../editor/editor.module";
import Reservation from "../reservation/reservation.module";

class AppRouter extends Component {
    render() {
        return <>
            <Route path="/editor" component={Editor} />
            <Route path="/reservation" component={Reservation} />
        </>
    }
}

export default AppRouter;