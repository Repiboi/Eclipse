import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './Login';
function App() {
  return (
    <div className="App">
    <Router> 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
