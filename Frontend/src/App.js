
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './Components/Navbar';
import ShowBook from './screens/showBook';
import AddBook from './screens/AddBook'
import EditBook from './screens/EditBook';
//import deleteBook from './Components/deleteBook'

import BookDetail from './screens/BookDetail';
import Signup from './screens/Signup';
import Signin from './screens/Signin';




import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return(
   
    <Router>
      <Navbar />
        <Routes>
        <Route  path='/' element={<ShowBook />} />
        <Route  path='/admin/addBook' element={<AddBook />}/>
        <Route path="/admin/edit/:id" element={<EditBook/>} />
        <Route path="/admin/delete:id" element={<deleteBook />} />
        <Route  path='/book/:id' element={<BookDetail/>} />
        <Route  path='/signup' element={<Signup/>} />
        <Route  path='/signin' element={<Signin/>} />
        </Routes>
    </Router>
  )

}

export default App;