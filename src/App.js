import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Main from './components/mains/Main';
import Auth from './components/auths/Auth';

function App() {
  const [isLogin,setIslogin]=useState(true)
  return (
    <div >
        {
          isLogin? <Main/>: <Auth/>
        } 
     
      

    </div>
  );
}

export default App;
