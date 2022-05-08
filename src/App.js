import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Items from './Components/Items/Items';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ItemDetail from './ItemDetails/ItemDetail';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddItem from './Components/AddItem/AddItem';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory' element={<Items></Items>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>}></Route>
        <Route path='/manageinventories' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/manageinventories/update/:id' element={<RequireAuth>
          <UpdateItem></UpdateItem>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
