import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const categories = [
    {
      name: 'About'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Contact'
    },
  ]

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function renderCategory(currentCategory) {
    
    if (currentCategory.name === 'Projects') {
      return (
        <Projects />
      );
    } else if (currentCategory.name === 'About') {
      return (
        <About />
      );
    } else if (currentCategory.name === 'Contact') {
      return (
        <Contact />
      )
    } 

  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {renderCategory(currentCategory)}
      </main>
    </div>
  );
}

export default App;
