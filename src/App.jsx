import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-6xl text-orange-700 font-bold mt-10">
        Testing oAuth With Passport
      </h1>
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="btn btn-error text-white">Login With Google</button>
      </div>
    </>
  );
}

export default App;
