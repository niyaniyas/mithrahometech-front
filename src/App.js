// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'

import ACRepairHomepage from './Landing/ACRepairHomepage';
import Login from './Login/Login';
// import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/AcrepairHome' element={<ACRepairHomepage/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
