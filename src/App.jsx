import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const handleLogin=()=>{
  window.location.href = "http://localhost:5000/auth/google"; 
}

  return (
    <>
      <h1 className="text-center text-6xl text-orange-700 font-bold mt-10">
        Testing oAuth With Passport
      </h1>
      <div className="flex justify-center items-center gap-6 mt-6">
        <button onClick={handleLogin} className="btn btn-error text-white">Login With Google</button>
      </div>
    </>
  );
}

export default App;
