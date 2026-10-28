import {  BrowserRouter as Router,Routes, Route } from "react-router";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect( ()=>{
    const fetchUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/me");
        if(!response.ok) {
          throw Error();
        }
        console.log(dados)
        const dados = response.json();
        setUser(dados); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home user={user} userChange={setUser}/>} />
        </Routes>
      </Router>
  )
}

export default App;
