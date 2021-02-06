import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// pages
import Home from './pages/Home';
import Register from './pages/Register';
import Detail from './pages/Detail';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/detail" component={Detail} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
