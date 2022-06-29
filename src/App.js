import React, { useState, useEffect } from "react";
import Dogs from "./components/pages/Dogs";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import NavBar from "./components/NavBar";

function App() {
  const [currentPage, setCurrentPage] = useState('Dogs');

  const renderPage = () => {
    if (currentPage === 'Dogs') {
      return <Dogs/>
    }
    if (currentPage === 'About') {
      return <About/>
    }
    if (currentPage === 'SignUp') {
      return <SignUp/>
    }
  }

  useEffect(() => {
    document.title = currentPage;
  })

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <NavBar onPageChange={handlePageChange}/>
      {renderPage()}
    </div>
  )
}

export default App;