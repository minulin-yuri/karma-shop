import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Home";
import Category from "../Category";
import Contacts from "../Contacts";
import NotFoundPage from "../NotFoundPage";


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    path="/category"
                    component={Category}
                />
                <Route
                    path="/contacts"
                    component={Contacts}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </Router >
    );
}
