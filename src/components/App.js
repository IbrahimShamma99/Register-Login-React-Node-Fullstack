import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import {Routes} from "../constants/constants"

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">
					<Switch>
						<Route exact path={Routes.register} component={Registration} />
						<Route exact path={Routes.login} component={Login} />
						<Redirect from={Routes.base} to={Routes.login} />
					</Switch>
					</div>
				</Router>
		);
	}
}
export default App;
