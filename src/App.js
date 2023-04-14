
import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextoListCart from './components/components item/providerContextoListCart';
import Saludo from './components/checkout/Saludo';

import CheckoutPage from './components/checkout/CheckoutPage';



function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
            <Route path='/checkout/:idOrder' element={ <CheckoutPage />} />
            <Route path='/finalizar' element={<Saludo/>}/>
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

export default App;
