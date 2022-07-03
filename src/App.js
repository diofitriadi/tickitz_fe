import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Dashboard} from './pages';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App;
