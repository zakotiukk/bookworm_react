import './App.css';
import {useEffect} from 'react';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route,Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from "./components/Form/Form";
import ProductDetails from './components/ProductDetails/ProductDetails';
const App = ()=> {

 const {onToggleButton,tg} =useTelegram();


  useEffect( () => {
    tg.ready();
  },[])
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>} />
        <Route path={'form'} element={<Form/>}/>
        <Route path={'product/:id'} element={<ProductDetails/>}/>
     </Routes>
    </div>
  );
};

export default App;
