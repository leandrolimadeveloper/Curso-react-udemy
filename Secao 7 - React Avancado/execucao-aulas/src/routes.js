import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Erro from './pages/Erro'
import Produto from "./pages/Produto";

import Header from './components/Header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route exact path='/contato' component={Contato} />
                <Route path='/produto/:id' component={Produto} />
                <Route path='*' component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes