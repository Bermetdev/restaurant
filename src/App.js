import './App.scss';
import { Route ,Routes } from 'react-router-dom';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Homepage from './components/HomePage/Homepage';
import Reservation from './components/Reservation/Reservation';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import MenuSinglepage from './singlepage/MenuSinglepage';
import OneProduct from './singlepage/OneProduct/OneProduct';
import Order from './preOrder/Order';
import PreOrder from './preOrder/PreOrder';

function App() {
  return (
    <>
     <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='reservation' element={<Reservation/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='menu' element={<Menu/>}/>
                    {/* <Route path='menu/:category' element={<MenuSinglepage/>}/> */}
                    <Route path='menu/:id' element={<MenuSinglepage/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='preorder' element={<PreOrder/>}/>


                </Route>
                <Route path='oneproduct/:id' element={<OneProduct/>}/>

            </Routes>


    </>
  );
}

export default App;
