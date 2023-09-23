
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import  CreateBooks  from './pages/CreateBooks';
import  DeleteBook  from './pages/DeleteBook';
import  EditBook  from './pages/EditBook';
import  ShowBook  from './pages/ShowBook';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
    </div>
  );
}

export default App;
