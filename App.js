import './App.css';
import React from "react";
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder"

function App() {
  return (
    <div className="App">
     
      <Layout>
         <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
