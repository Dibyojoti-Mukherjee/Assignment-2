import Dashboard from "./Components/Dashboard/Dashboard";
import SideBar from "./Components/Navigation/SideBar";
import "./App.css";
import { useState } from "react";
import TableWrapper from "./Components/Table/TableWrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const projectStatus = [
  { name: "Test1", dueDate: "5/11/2022", progress: "30%" },
  { name: "Test2", dueDate: "6/12/2022", progress: "50%" },
  { name: "Test3", dueDate: "4/11/2022", progress: "60%" },
  { name: "Test4", dueDate: "2/10/2022", progress: "90%" },
  { name: "Test5", dueDate: "9/9/2022", progress: "70%" },
  { name: "Test6", dueDate: "7/11/2022", progress: "60%" },
];

function App() {
 
  return (
    // <div className='App'>
    //   <SideBar isClicked={setIsClick}></SideBar>
    //   {isPSClicked?(<TableWrapper projectStatus={projectStatus}/>):(<Dashboard> </Dashboard>)}

    // </div>

    <BrowserRouter>
    <div className="App">
      <SideBar />
      <Routes>
      
          <Route path="/" element={<Dashboard/>} end/>
          <Route path="projectStatus" element={<TableWrapper projectStatus={projectStatus}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
