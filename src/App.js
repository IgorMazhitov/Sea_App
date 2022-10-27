import React, { useState } from "react";
import Context from "./Context";
import MainPage from "./components/Main page/MainPage";

function App() {

  const [page, setPage] = useState('home')
  const [mainDocsList, setMainDocsList] = useState([{ id: Date.now(), type: 'ADD', info: false }])
  const [certList, setCertList] = useState([{ id: Date.now(), type: 'ADD', info: false }])

  const changePage = (name) => {

    setPage(name)  

  }




  return (
    <Context.Provider value={{
      page, changePage, 
      mainDocsList, setMainDocsList,
      certList, setCertList
    }}>

      <div className="App">

        <MainPage />

      </div>

    </Context.Provider>
  );
}

export default App;
