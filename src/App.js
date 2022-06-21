import logo from './logo.svg';
import {useContext} from 'react';
import { DataProvider } from './Context/dataContext';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Components/Edit'
import Dan from './Components/Dan';
import Add from './Components/Add';

function App() {
  
  
  return (
    <div className="App">
      
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='dan' element={<Dan />} />
        <Route path='add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    
      </DataProvider>
    </div>
  );
}

export default App;
